/*
 * Jerry 2015-11-01 8:34AM 
 * http://scn.sap.com/community/fiori/blog/2015/10/28/how-i-do-self-study-on-a-given-fiori-control--part-9
 sap.ui.controller("buttontutorial.view.simple", { 
 */


sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller){
	"use strict";
	return Controller.extend("buttontutorial.view.simple",{
	
	BIG_IMAGE: "https://cloud.githubusercontent.com/assets/5669954/25305089/3c4d7490-2775-11e7-9422-b5d830a59732.jpg",
	onPress: function(){
		var image = this.byId("jerryImage");
		this.loadImageWithProxy(image);
	},
	
	injectProxy: (function(){
		var imgProxy = new Image();

        return function(img, src){
            imgProxy.onload = function(){
        		img.setSrc(this.src);
            };
            img.setSrc("buttontutorial/view/loading.gif");
            imgProxy.src = this.BIG_IMAGE;
        };
	})(),
	
	loadImageNormal: function(image){
		image.setSrc(this.BIG_IMAGE);
	}, 
	loadImageWithProxy: function(image){
		this.injectProxy(image);
    }
  });}
);
