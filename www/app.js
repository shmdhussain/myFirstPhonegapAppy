/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


// Create a new module
var myApp = angular.module('myApp', ['ngRoute']);

// register a new service
//myApp.value('appName', 'MyCoolApp');

// configure existing services inside initialization blocks.
myApp.config(function($locationProvider, $routeProvider) {
    $routeProvider
        .when('/s', {
            templateUrl: 'partials/home.html'
        })
        .when('/p1', {
            templateUrl: 'partials/page1.html',
            //controller:'cipProductController'
        })
        .when('/p2', {
            templateUrl: 'partials/page2.html',
            // controller:'cipProductController'

        })
        .when('/p3', {
            templateUrl: 'partials/page3.html',
            // controller:'cipProductController'

        })
        .when('/p4', {
            templateUrl: 'partials/page4.html',
            // controller:'cipProductController'
        })
        .when('/default', {
            templateUrl: 'partials/Default.html',
            // controller:'cipProductController'
        })
        .otherwise({
            redirectTo: '/page1'
        });


    // Configure existing providers
    //$locationProvider.hashPrefix('!');
});

myApp.run(['$rootScope',  '$location', '$timeout', '$q', '$route', function($rootScope, $location, $timeout, $q, $route) {

/*START Pull to Refresh */
    var exampleLoadingFunction = function() {
      var deferred=$q.defer();
      var promise = deferred.promise;
      $route.reload();
      setTimeout(function(){
        deferred.resolve();
      }, 4000)
      return promise;
      // return new Promise( function( resolve, reject ) {
      //   // Run some async loading code here
      //   if ( 1 ) {
      //     setTimeout(function(){resolve();}, 4000)
          
      //   } else {
      //     reject();
      //   }
      // } )
    };
    var opt={
        
        // Number of pixels of dragging down until refresh will fire
        distanceToRefresh: 70, 

        // The dragging resistance level, the higher the more you'll need to drag down.
        resistance: 2.5,
        loadingFunction: exampleLoadingFunction
    }

    setTimeout(function(){WebPullToRefresh.init( opt );}, 2000)
    
    
    /*END Pull to Refresh */


}]);
