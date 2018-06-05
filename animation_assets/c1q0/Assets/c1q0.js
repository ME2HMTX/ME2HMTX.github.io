(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"c1q0_atlas_", frames: [[0,345,574,293],[652,0,270,68],[0,0,650,343],[576,345,357,53]]}
];


// symbols:



(lib.KCL = function() {
	this.spriteSheet = ss["c1q0_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.KCL2 = function() {
	this.spriteSheet = ss["c1q0_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.KVL = function() {
	this.spriteSheet = ss["c1q0_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.KVL2 = function() {
	this.spriteSheet = ss["c1q0_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.btnstart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgZA8IAAgEIAEAAQAIAAADgEQACgDAAgKIAAhaIgOAAIgMABQgEACgEAEQgDAFAAAJIgEAAIABgcIBgAAIACAcIgEAAIgCgMQgCgEgFgCQgFgDgHAAIgRAAIAABaQAAALACACQAEAEAGAAIAFAAIAAAEg");
	this.shape.setTransform(-156.3,-126.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcA8Igog4IgHAAIgDAAIgCAAIAAAiQAAAMACACQAEAEAGAAIAFAAIAAAEIgzAAIAAgEIAEAAQAIAAADgEQACgDAAgLIAAhLQAAgMgCgDQgEgDgHAAIgEAAIAAgDIArAAQASAAAJACQAJADAHAHQAGAIAAAKQAAALgHAIQgIAIgPACIAZAiQAJANAGAEQAGADAJABIAAAEgAgYgzIAAAyIADAAIACAAQARAAAHgHQAJgIAAgLQAAgLgHgHQgHgHgKAAIgOABg");
	this.shape_1.setTransform(-166.5,-126.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAQA9IAAgDQAHAAADgCQACgCAAgEQAAgDgDgJIgHgRIguAAIgIATQgDAHAAADQAAADADACQADACAIABIAAADIglAAIAAgDQAHgBACgCQAFgFAFgNIAqhhIACAAIAqBiQAFAMAEAEQAEADAHABIAAADgAgZAOIAoAAIgTgug");
	this.shape_2.setTransform(-179.3,-126.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgZA8IAAgEIAFAAQAHAAADgEQACgDAAgKIAAhaIgOAAIgMABQgFACgDAEQgDAFgBAJIgDAAIACgcIBgAAIABAcIgEAAIgCgMQgDgEgEgCQgFgDgHAAIgRAAIAABaQAAALACACQAEAEAGAAIAFAAIAAAEg");
	this.shape_3.setTransform(-189.7,-126.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHA+IgLgDIgLgDQgBAAAAAAQAAAAgBAAQAAAAgBABQAAAAgBAAIgCAFIgCAAIAAgoIACAAQADAMAEAHQAEAGAHAEQAJAFAIAAQALAAAGgGQAHgGAAgIQAAgEgDgFQgCgEgFgEIgSgLQgPgIgHgFQgGgFgEgGQgCgGAAgIQAAgNAJgJQAKgJAPAAQAJAAALAFIAGACQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBQACgBAAgEIAEAAIAAApIgEAAQgCgMgDgHQgFgHgHgEQgIgEgGAAQgKAAgGAGQgGAFAAAHQAAAGAEAEQAGAHATALIAXAMQAGAFADAHQADAGAAAHQABAOgLAKQgLAJgQAAIgJAAg");
	this.shape_4.setTransform(-200.2,-126.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1.7,1,1).p("Alnh3ILPAAQAxAAAjAjQAkAjAAAxQAAAxgkAjQgjAkgxAAIrPAAQgyAAgjgkQgjgjAAgxQAAgxAjgjQAjgjAyAAg");
	this.shape_5.setTransform(-177.9,-126.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AlnB4QgyAAgjgkQgjgiAAgyQAAgxAjgjQAjgjAyAAILPAAQAxAAAkAjQAjAkAAAwQAAAxgjAjQgkAkgxAAg");
	this.shape_6.setTransform(-177.9,-126.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-226.9,-139.9,98,26);


(lib.btnrun = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYA8IAAgEIADAAQAIAAADgEQACgDAAgKIAAhaIgOAAIgMABQgFACgDAEQgDAFgBAJIgDAAIABgcIBhAAIABAcIgDAAIgDgMQgDgEgEgCQgFgDgHAAIgRAAIAABaQAAALADACQADAEAHAAIAEAAIAAAEg");
	this.shape.setTransform(-157.1,-126.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMA8IAAgEIAIgBIADgCIABgDIgBgFIgFgIIgTgeIgZAgIgFAHIgBAEQAAADADABQACACAHAAIAAAEIgqAAIAAgEQAEAAADgCIALgFQAFgFAGgIIAcgjIgXgiQgKgOgHgEQgGgEgJAAIAAgDIA3AAIAAADQgHAAgDACQgCACAAADQAAADAEAGIARAbIAWgaIAEgHIABgDIgBgEQAAAAgBgBQAAAAgBgBQAAAAgBAAQAAAAgBgBIgIAAIAAgDIAqAAIAAADIgIABQgFACgDAEIgMAMIgXAeIAZAmQALAQAFAEQAFAEAIAAIAAAEg");
	this.shape_1.setTransform(-169.2,-126.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgyA8IAAgEIAEAAQAEAAAEgCQADgBABgDIABgMIAAhMQAAgMgCgCQgDgDgIAAIgEAAIAAgDIBbAAIABAZIgDAAQgCgJgCgEQgDgDgEgCIgMgBIggAAIAAAvIAZAAQAKAAAEgDQAEgEABgKIADAAIAAAoIgDAAQgBgIgCgDQgBgDgEgCQgDgBgIgBIgZAAIAAAoQAAAIABACIACACQACABAFAAIATAAQAKAAAFgBQAEgCAEgEQAGgGAGgLIADAAIgKAfg");
	this.shape_2.setTransform(-181.2,-126.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAtA8IhOhfIAABJQAAALADACQADAEAHAAIAEAAIAAAEIgpAAIAAgEIAEAAQAHAAADgEQACgDAAgKIAAhSIgHgIIgIgEIgIAAIAAgDIAgAAIBJBXIAAhDQAAgLgDgDQgDgDgIAAIgDAAIAAgDIApAAIAAADIgEAAQgIAAgDAEQgCADAAAKIAABjg");
	this.shape_3.setTransform(-193.4,-126.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1.7,1,1).p("Alnh3ILPAAQAxAAAjAjQAkAjAAAxQAAAxgkAjQgjAkgxAAIrPAAQgyAAgjgkQgjgjAAgxQAAgxAjgjQAjgjAyAAg");
	this.shape_4.setTransform(-175.3,-126.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AlnB4QgxAAgkgkQgjgiAAgyQAAgxAjgjQAjgjAyAAILPAAQAxAAAkAjQAjAkAAAwQAAAxgjAjQgkAkgxAAg");
	this.shape_5.setTransform(-175.3,-126.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.3,-139.7,98,26);


(lib.btnrestart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYA8IAAgEIADAAQAIAAADgEQACgDAAgKIAAhaIgOAAIgMABQgFACgDAEQgDAFgBAIIgDAAIABgcIBhAAIABAcIgDAAIgDgLQgDgEgEgDQgFgCgHAAIgRAAIAABaQAAALADADQADADAHAAIAEAAIAAAEg");
	this.shape.setTransform(-142.7,-126);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAcA8Igog4IgHAAIgDAAIgCAAIAAAiQAAAMACADQAEADAGAAIAFAAIAAAEIgzAAIAAgEIAEAAQAIAAADgEQACgEAAgKIAAhLQAAgMgCgDQgEgDgHAAIgEAAIAAgEIArAAQASAAAJADQAJADAHAIQAGAGAAALQAAALgHAIQgIAIgPACIAZAjQAJALAGAFQAGADAJABIAAAEgAgYgzIAAAyIADABIACAAQARAAAHgIQAJgHAAgMQAAgLgHgHQgHgHgKAAIgOABg");
	this.shape_1.setTransform(-153,-126);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAQA9IAAgDQAHAAADgDQACgCAAgCQAAgEgDgJIgHgRIguAAIgIATQgDAHAAAEQAAACADACQADACAIABIAAADIglAAIAAgDQAHgCACgCQAFgEAFgNIAqhhIACAAIAqBiQAFAMAEAEQAEAEAHAAIAAADgAgZAPIAoAAIgTgvg");
	this.shape_2.setTransform(-165.7,-126.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgYA8IAAgEIADAAQAIAAADgEQACgDAAgKIAAhaIgOAAIgMABQgEACgEAEQgDAFAAAIIgEAAIABgcIBgAAIACAcIgDAAIgDgLQgCgEgFgDQgFgCgHAAIgRAAIAABaQAAALADADQADADAGAAIAFAAIAAAEg");
	this.shape_3.setTransform(-176.2,-126);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgHA+IgLgDIgLgDQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAAAAAIgCAFIgEAAIAAgoIAEAAQACAMAEAHQADAGAJAEQAHAFAJAAQALAAAHgGQAGgGAAgIQAAgEgDgFQgCgEgFgEIgSgLQgPgIgGgFQgHgFgDgGQgEgGAAgIQAAgNAKgJQAKgJAPAAQAJAAAKAFIAHACQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAgBIADgFIACAAIAAApIgCAAQgDgMgEgHQgDgHgIgEQgHgEgIAAQgJAAgGAGQgGAFAAAHQAAAGAEAEQAFAHAUALIAXAMQAGAFADAHQADAGAAAHQAAAOgKAKQgKAJgRAAIgJAAg");
	this.shape_4.setTransform(-186.6,-126.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgyA8IAAgEIAEAAQAEAAAEgCQADgBABgDIABgMIAAhMQAAgMgCgCQgDgEgIABIgEAAIAAgEIBbAAIABAaIgDAAQgCgJgCgDQgDgEgEgCIgMgBIggAAIAAAvIAZAAQAKAAAEgDQAEgEABgLIADAAIAAApIgDAAQgBgJgCgCQgBgDgEgCQgDgBgIgBIgZAAIAAAnQAAAJABABIACADQACABAFAAIATAAQAKAAAFgBQAEgCAEgEQAGgGAGgLIADAAIgKAfg");
	this.shape_5.setTransform(-197.3,-126);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAcA8Igog4IgHAAIgDAAIgCAAIAAAiQAAAMACADQAEADAGAAIAFAAIAAAEIgzAAIAAgEIAEAAQAIAAADgEQACgEAAgKIAAhLQAAgMgCgDQgEgDgHAAIgEAAIAAgEIArAAQASAAAJADQAJADAHAIQAGAGAAALQAAALgHAIQgIAIgPACIAZAjQAJALAGAFQAGADAJABIAAAEgAgYgzIAAAyIADABIACAAQARAAAHgIQAJgHAAgMQAAgLgHgHQgHgHgKAAIgOABg");
	this.shape_6.setTransform(-208.5,-126);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1.7,1,1).p("Alnh3ILPAAQAyAAAjAjQAjAkAAAwQAAAxgjAkQgkAjgxAAIrPAAQgxAAgkgjQgjgjAAgyQAAgxAjgjQAjgjAyAAg");
	this.shape_7.setTransform(-175.9,-126.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AlnB4QgxAAgkgkQgjgiAAgyQAAgxAjgjQAjgjAyAAILPAAQAxAAAjAjQAkAkAAAwQAAAxgkAjQgjAkgxAAg");
	this.shape_8.setTransform(-175.9,-126.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-224.9,-139.1,98,26);


// stage content:
(lib.c1q0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.startbtn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame()
		{
			this.gotoAndPlay(3);
		}
	}
	this.frame_4 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.runbtn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_2.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_2()
		{
			this.gotoAndPlay(8);
		}
	}
	this.frame_9 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.runbtn2.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_3.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_3()
		{
			this.gotoAndPlay(13);
		}
	}
	this.frame_14 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/
		
		this.stop();
		
		/* Click to Go to Frame and Play
		Clicking on the specified symbol instance moves the playhead to the specified frame in the timeline and continues playback from that frame.
		Can be used on the main timeline or on movie clip timelines.
		
		Instructions:
		1. Replace the number 5 in the code below with the frame number you would like the playhead to move to when the symbol instance is clicked.
		2.Frame numbers in EaselJS start at 0 instead of 1
		*/
		
		this.restartbtn.addEventListener("click", fl_ClickToGoToAndPlayFromFrame_4.bind(this));
		
		function fl_ClickToGoToAndPlayFromFrame_4()
		{
			this.gotoAndPlay(0);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(3).call(this.frame_4).wait(5).call(this.frame_9).wait(5).call(this.frame_14).wait(1));

	// Layer_1
	this.startbtn = new lib.btnstart();
	this.startbtn.name = "startbtn";
	this.startbtn.parent = this;
	this.startbtn.setTransform(453,343.7);
	new cjs.ButtonHelper(this.startbtn, 0, 1, 2, false, new lib.btnstart(), 3);

	this.text = new cjs.Text("Volt-Amp Characteristics", "36px 'Times New Roman'");
	this.text.lineHeight = 42;
	this.text.lineWidth = 374;
	this.text.parent = this;
	this.text.setTransform(88,138.2);

	this.runbtn = new lib.btnrun();
	this.runbtn.name = "runbtn";
	this.runbtn.parent = this;
	this.runbtn.setTransform(272.4,477.6);
	new cjs.ButtonHelper(this.runbtn, 0, 1, 2, false, new lib.btnrun(), 3);

	this.text_1 = new cjs.Text("Volt- Amp Characteristics", "24px 'Times New Roman'");
	this.text_1.lineHeight = 29;
	this.text_1.lineWidth = 271;
	this.text_1.parent = this;
	this.text_1.setTransform(51,56);

	this.instance = new lib.KVL2();
	this.instance.parent = this;
	this.instance.setTransform(251,178,0.447,0.447);

	this.instance_1 = new lib.KVL();
	this.instance_1.parent = this;
	this.instance_1.setTransform(178,202,0.47,0.47);

	this.runbtn2 = new lib.btnrun();
	this.runbtn2.name = "runbtn2";
	this.runbtn2.parent = this;
	this.runbtn2.setTransform(272.4,477.6);
	new cjs.ButtonHelper(this.runbtn2, 0, 1, 2, false, new lib.btnrun(), 3);

	this.text_2 = new cjs.Text("Kirchhoff’s Voltage Law (KVL)", "24px 'Times New Roman'");
	this.text_2.lineHeight = 29;
	this.text_2.lineWidth = 349;
	this.text_2.parent = this;
	this.text_2.setTransform(51,56);

	this.instance_2 = new lib.KCL2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(262,167,0.471,0.471);

	this.instance_3 = new lib.KCL();
	this.instance_3.parent = this;
	this.instance_3.setTransform(166,199,0.556,0.556);

	this.restartbtn = new lib.btnrestart();
	this.restartbtn.name = "restartbtn";
	this.restartbtn.parent = this;
	this.restartbtn.setTransform(272.4,477.6);
	new cjs.ButtonHelper(this.restartbtn, 0, 1, 2, false, new lib.btnrestart(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.text,p:{x:88,y:138.2,text:"Volt-Amp Characteristics",font:"36px 'Times New Roman'",lineHeight:41.9,lineWidth:374}},{t:this.startbtn}]},1).to({state:[{t:this.text_1,p:{y:56,text:"Volt- Amp Characteristics",font:"24px 'Times New Roman'",lineHeight:28.6,lineWidth:271}},{t:this.text,p:{x:51,y:125.7,text:"-All voltages are relative to a reference value\n-The voltage at a point 'a' means the potential difference of 'a' relative to the ground\n-Vab means the potential difference of 'a' relative to 'b'\n-Vab = Va - Vb\n-Current always travels in the direction of decreasing voltage potential\n-ia means the current is flowing into point 'a'",font:"18px 'Times New Roman'",lineHeight:21.95,lineWidth:415}},{t:this.runbtn}]},3).to({state:[{t:this.text_2},{t:this.text_1,p:{y:125.7,text:"The algebraic sum of potential differences around a closed loop at any instant is zero.  \n\nv1,v2,v3: -ve\nv4: +ve",font:"18px 'Times New Roman'",lineHeight:21.95,lineWidth:415}},{t:this.runbtn2},{t:this.instance_1},{t:this.instance},{t:this.text,p:{x:664,y:177,text:"",font:"18px 'TimesNewRomanPSMT'",lineHeight:21.95,lineWidth:100}}]},5).to({state:[{t:this.text_1,p:{y:56,text:"Kirchhoff’s Current Law (KCL)",font:"24px 'Times New Roman'",lineHeight:28.6,lineWidth:349}},{t:this.text,p:{x:51,y:125.7,text:"The algebraic sum of currents flowing into a node at any instant is zero. ",font:"18px 'Times New Roman'",lineHeight:21.95,lineWidth:415}},{t:this.restartbtn},{t:this.instance_3},{t:this.instance_2}]},5).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	id: '5EA71AE379DFA1469F652AFEE253E239',
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/c1q0_atlas_.png", id:"c1q0_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5EA71AE379DFA1469F652AFEE253E239'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;