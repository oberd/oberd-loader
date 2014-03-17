/*globals define:false, Modernizr */
define(function (require) {
  'use strict';

  var $ = require('jquery');
  var svgInner = '<svg version="1.1" id="oberd_inner" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="161.186px" height="161.186px" viewBox="226.082 316.35 161.186 161.186"style="enable-background:new 226.082 316.35 161.186 161.186;" xml:space="preserve"> <g> <path style="fill:#d8e549;" d="M284.37,325.533c3-3,6.468-5.277,10.403-6.841c3.936-1.558,7.904-2.34,11.901-2.342 c3.997,0.002,7.966,0.784,11.9,2.342c3.938,1.564,7.403,3.841,10.406,6.841l49.105,49.105c3.124,3.125,5.437,6.625,6.936,10.497 c1.498,3.876,2.25,7.812,2.246,11.809c0,4-0.779,7.965-2.343,11.899c-1.56,3.942-3.841,7.403-6.839,10.405l-49.105,49.105 c-3.126,3.128-6.622,5.438-10.497,6.935c-3.876,1.507-7.812,2.252-11.809,2.248c-3.998,0.004-7.932-0.745-11.808-2.248 c-3.875-1.497-7.371-3.807-10.496-6.935l-49.109-49.105c-2.999-3.002-5.28-6.469-6.839-10.405 c-1.562-3.935-2.341-7.898-2.341-11.899c0-3.996,0.748-7.931,2.248-11.809c1.5-3.871,3.811-7.37,6.933-10.497L284.37,325.533z M315.486,339.028c-2.499-2.499-5.437-3.748-8.812-3.748c-3.374,0-6.31,1.249-8.808,3.748l-49.107,49.107 c-2.501,2.5-3.75,5.435-3.748,8.811c-0.001,3.375,1.25,6.31,3.748,8.81l49.105,49.106c2.501,2.499,5.436,3.746,8.808,3.746 c3.374,0,6.307-1.247,8.811-3.746l49.105-49.106c2.498-2.498,3.749-5.436,3.747-8.81c0-3.375-1.249-6.308-3.747-8.811 L315.486,339.028z"/> </g> </svg>';
  var svgOuter = '<svg version="1.1" id="oberd_outer" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="161.186px" height="161.186px" viewBox="226.082 316.35 161.186 161.186"style="enable-background:new 226.082 316.35 161.186 161.186;" xml:space="preserve"> <g> <path style="fill:#CADB2D;" d="M288.102,337.479c2.499-2.498,5.386-4.395,8.663-5.697c3.277-1.297,6.582-1.948,9.91-1.95 c3.329,0.002,6.634,0.653,9.91,1.95c3.279,1.302,6.166,3.199,8.665,5.697l40.891,40.89c2.603,2.603,4.526,5.516,5.774,8.741 c1.249,3.228,1.874,6.505,1.872,9.833c0,3.331-0.65,6.633-1.951,9.909c-1.299,3.282-3.198,6.164-5.695,8.664l-40.891,40.891 c-2.604,2.604-5.514,4.527-8.74,5.773c-3.228,1.255-6.506,1.876-9.833,1.872c-3.329,0.004-6.605-0.62-9.832-1.872 c-3.227-1.246-6.138-3.169-8.74-5.773l-40.894-40.891c-2.497-2.5-4.396-5.387-5.695-8.664c-1.301-3.275-1.949-6.578-1.949-9.909 c0-3.327,0.623-6.604,1.872-9.833c1.249-3.223,3.173-6.137,5.772-8.741L288.102,337.479z M314.012,348.717 c-2.08-2.081-4.524-3.121-7.337-3.121c-2.81,0-5.254,1.04-7.334,3.121l-40.892,40.892c-2.083,2.082-3.122,4.525-3.121,7.336 c-0.001,2.81,1.041,5.253,3.121,7.335l40.891,40.892c2.083,2.081,4.526,3.119,7.334,3.119c2.809,0,5.251-1.038,7.336-3.119 L354.9,404.28c2.08-2.08,3.122-4.525,3.119-7.335c0-2.812-1.039-5.253-3.119-7.336L314.012,348.717z"/> </g> </svg>';

  function Loader($container) {
    this.$container = $container;
    this.$el = $('.oberd-loader').length ? $('.oberd-loader') : $('<div class="oberd-loader">');
    if (Modernizr.svg) {
      this.$inner = $('<div class="o-inner">').html(svgInner);
      this.$outer = $('<div class="o-outer">').html(svgOuter);
      this.$o = $('<div class="o">').append(this.$inner).append(this.$outer);
      this.$el.empty().append(this.$o);
    } else {
      this.$el.html('Loading...');
    }
    var transEndEventNames = {
      'WebkitTransition' : 'webkitTransitionEnd',// Saf 6, Android Browser
      'MozTransition'    : 'transitionend',      // only for FF < 15
      'transition'       : 'transitionend'       // IE10, Opera, Chrome, FF 15+, Saf 7+
    };
    this.endEvent = transEndEventNames[Modernizr.prefixed('transition')];
    this.prepended = false;
    this.show();
  }

  Loader.prototype.show = function ($container) {
    this.$container = $container || this.$container;
    if(!this.prepended){
      this.prepended = true;
      this.$container.prepend(this.$el);
    }
    this.$el.addClass('spinning').css('z-index','');
  };
  Loader.prototype.hide = function () {
    var el = this.$el;
    if(Modernizr.csstransitions){
      el.on(this.endEvent, function () {
        return el.css('z-index',0);
      });
      el.removeClass('spinning');
    }else{
      el.removeClass('spinning').css('z-index',0);
    }
  };

  return Loader;
});
