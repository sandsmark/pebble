var globalTopParkVisible = false;
var globalBreadBoard = null;
var globalBreadBoardSize = "SMALL";
var globalBreadBoardDisplay = "BB1";
var globalBBwidth = "10"
var globalBBheight = "10"
var globalBBPower = "Single";
// var dropPointsX = new Array();
// var dropPointsY = new Array();

// globalBBloaded is an array to flag which images have already been loaded  
// 80 boards gives some spare capacity BUT keep an eye on it !
var globalBBloaded = new Array(80);  
	globalBBloaded[1] = true;


//=============================================


function BreadBoard()
{
        this.buffer = [];
}
BreadBoard.prototype.ClearAll = function()
{
        this.buffer.length = 0;
}
;

BreadBoard.prototype.getComponentList = function()
{
        return this.buffer;

}
;

BreadBoard.prototype.add = function (bbcomponent)
{
        this.buffer.push(bbcomponent);

    window.localStorage.setItem("lastCircuit", globalBreadBoard.toString())
}
;

BreadBoard.prototype.removeComponent =
function (findID)
{
        for(var i = 0; i < this.buffer.length; ++ i)
        {
                if(this.buffer[i].id == findID)
                {
                        this.buffer.splice(i, 1);
                    window.localStorage.setItem("lastCircuit", globalBreadBoard.toString())
                        break;
                }
        }
}
;

BreadBoard.prototype.find =
function (findID)
{
        for(var i = 0; i < this.buffer.length; ++ i)
        {
                if(this.buffer[i].id == findID)
                {
                        return this.buffer[i];
                }
        }
        return null;
}
;

BreadBoard.prototype.getComponentIDList =
function()
{
        var arrList = new Array();
        for(var i = 0; i < this.buffer.length; ++ i)
        {
                arrList.push(this.buffer[i].id);
        }
        return arrList;
}
;

BreadBoard.prototype.toString =
function ()
{
        var sb = new StringBuffer();
        for(var i = 0; i < this.buffer.length; ++ i)
        {
                sb.append(this.buffer[i].toString());
                sb.append("\n");
        }
        sb.append("BREADBOARDSTYLE=");
        sb.append(globalBreadBoardDisplay);
//
// If the breadboard type is BB55 we also need to store the size of the breadboard
       if(globalBreadBoardDisplay == "BB55" )
          {
          sb.append("=");
          sb.append(globalBBwidth);
          sb.append("=");
          sb.append(globalBBheight);
          }
//
//
        sb.append("\n");
        sb.append("SHOWTHETOPAREA=");
        sb.append(globalTopParkVisible);
        sb.append("\n");
        return sb.toString();
}
;

//=============================================

function showState()
{
        alert(globalBreadBoard.toString());
}

//=============================================

function settopsideparking(selObj)
{
        globalTopParkVisible = selObj.value;
        setBreadboardType(globalBreadBoardDisplay);
    window.localStorage.setItem("lastCircuit", globalBreadBoard.toString())
}

//=============================================

function changeBreadboard(selObj)
{
        var val = selObj.value;
        setBreadboardType(val);
}

//=============================================

function setBreadboardType(val)
{
	var loaded = val.substring(2);
	if(globalBBloaded[loaded] == null)
	 {
	     loadreqdBBimage(val);
	     globalBBloaded[loaded] = true;
	 }

        document.getElementById("breadboardselector").value = val;
	document.getElementById("topsideparking").value = globalTopParkVisible;
        globalBreadBoardDisplay = val;


        var imgObj = eval(val);

        var o = document.getElementById("BreadboardDiv");
        var q = document.getElementById("HiddenboardDiv");
        var r = document.getElementById("TopparkboardDiv");  

	if(globalTopParkVisible == "true")
	{
		o.style.height = "500px";
		r.style.top = "60px";
		o.style.top = "355px";	
		q.style.top = "865px"; 
	}
	else
	{
		o.style.height = "500px";
		o.style.top = "60px";	
		q.style.top = "570px";
		r.style.top = "570px";
	}

        switch(val)
        {
	case "BB1" :
	case "BB2" :
	case "BB3" :
	case "BB4" :
		globalBreadBoardSize = "SMALL";
		globalBBPower = "Single";
		o.style.width = "700px";
		q.style.width = "700px";
		break;
	case "BB5" :
	case "BB6" :
	case "BB7" :
	case "BB8" :
		globalBreadBoardSize = "SMALL";
		globalBBPower = "Double";
		o.style.width = "700px";
		q.style.width = "700px";
		break;
	case "BB9" :
		globalBreadBoardSize = "SMALL";
		globalBBPower = "Triple";
		o.style.width = "700px";
		q.style.width = "700px";
		break;
	case "BB37" :
		globalBreadBoardSize = "KIWIP";
		globalBBPower = "KiwiFull";
		o.style.width = "969px";
		q.style.width = "969px";
		break;
	case "BB38" :
		globalBreadBoardSize = "SCHOOL";
		globalBBPower = "Single";
		o.style.width = "1095px";
		q.style.width = "900px";
		break;
	case "BB10" :
		globalBreadBoardSize = "MEDIUM";
		globalBBPower = "Single";
		o.style.width = "890px";
		q.style.width = "890px";
		break;
	case "BB11" :
	case "BB12" :
		globalBreadBoardSize = "MEDIUM";
		globalBBPower = "Double";
		o.style.width = "890px";
		q.style.width = "890px";
		break;
	case "BB13" :
	case "BB14" :
	case "BB15" :
	case "BB16" :
		globalBreadBoardSize = "LARGE";
		globalBBPower = "Single";
		o.style.width = "1095px";
		q.style.width = "1095px";
		break;
	case "BB17" :
	case "BB18" :
	case "BB19" :
	case "BB20" :
		globalBreadBoardSize = "LARGE";
		globalBBPower = "Double";
		o.style.width = "1095px";
		q.style.width = "1095px";
		break;
	case "BB21" :
	case "BB22" :
	case "BB23" :
	case "BB24" :
		globalBreadBoardSize = "BIGGER";
		globalBBPower = "Single";
		o.style.width = "1257px";
		q.style.width = "1257px";
		break;
	case "BB25" :
	case "BB26" :
	case "BB27" :
	case "BB28" :
		globalBreadBoardSize = "BIGGER";
		globalBBPower = "Double";
		o.style.width = "1257px";
		q.style.width = "1257px";
		break;
	case "BB29" :
	case "BB30" :
	case "BB31" :
	case "BB32" :
		globalBreadBoardSize = "BIGGEST";
		globalBBPower = "Single";
		o.style.width = "1415px";
		q.style.width = "1415px";
		break;
	case "BB33" :
	case "BB34" :
	case "BB35" :
	case "BB36" :
		globalBreadBoardSize = "BIGGEST";
		globalBBPower = "Double";
		o.style.width = "1415px";
		q.style.width = "1415px";
		break;
	case "BB39" :
		globalBreadBoardSize = "DSEH5605";
		globalBBPower = "Single";
		o.style.width = "1282px";
		q.style.width = "1282px";
		break;
	case "BB40" :
		globalBreadBoardSize = "DSEH5613P";
		globalBBPower = "Special1";
		o.style.width = "890px";
		q.style.width = "890px";
		break;
	case "BB41" :
		globalBreadBoardSize = "DSEH5613F";
		globalBBPower = "Special2";
		o.style.width = "890px";
		o.style.height = "827px";
		if(globalTopParkVisible == "false" || globalTopParkVisible == false || globalTopParkVisible == null)
		{
			q.style.top = "897px";
		}
		else
		{
			q.style.top = "1192px";
		}
		break;
	case "BB42" :
		globalBreadBoardSize = "GADGETH";
		globalBBPower = "Special3";
		o.style.width = "826px";
		o.style.height = "530px";
		if(globalTopParkVisible == "false" || globalTopParkVisible == false || globalTopParkVisible == null)
		{
			q.style.top = "600px";
		}
		else
		{
			q.style.top = "895px";
		}
		break;
	case "BB43" :
		globalBreadBoardSize = "GADGETF";
		globalBBPower = "Special4";
		o.style.width = "1085px";
		o.style.height = "814px";    
		q.style.top = "884px";
		if(globalTopParkVisible == "false" || globalTopParkVisible == false || globalTopParkVisible == null)
		{
			q.style.top = "884px";
		}
		else
		{
			q.style.top = "1179px";
		}
		break;
	case "BB44" :
		globalBreadBoardSize = "LARGE";
		globalBBPower = "DoubleBB";
		o.style.width = "1095px";
		o.style.height = "1023px";
		if(globalTopParkVisible == "false" || globalTopParkVisible == false || globalTopParkVisible == null)
		{
			q.style.top = "1093px";
		}
		else
		{
			q.style.top = "1388px";
		}
		break;
	case "BB45" :
		globalBreadBoardSize = "BIGGEST";
		globalBBPower = "DoubleBB";
		o.style.width = "1415px";
		o.style.height = "1023px";
		if(globalTopParkVisible == "false" || globalTopParkVisible == false || globalTopParkVisible == null)
		{
			q.style.top = "1093px";
		}
		else
		{
			q.style.top = "1388px";
		}
		break;
	case "BB46" :
		globalBreadBoardSize = "SMALL2";
		globalBBPower = "Double";
		o.style.width = "856px";
		break;
	case "BB47" :
		globalBreadBoardSize = "DEVBOARD-G1";
		globalBBPower = "Special5";
		o.style.width = "1100px";
		o.style.height = "740px";
		if(globalTopParkVisible == "false" || globalTopParkVisible == false || globalTopParkVisible == null)
		{
			q.style.top = "810px";
		}
		else
		{
			q.style.top = "1105px";
		}
		break;
	case "BB48" :
		globalBreadBoardSize = "STPBRD1";
		globalBBPower = "Special6";
		o.style.width = "1155px";
		o.style.height = "974px";
		if(globalTopParkVisible == "false" || globalTopParkVisible == false || globalTopParkVisible == null)
		{
			q.style.top = "1044px";
		}
		else
		{
			q.style.top = "1339px";
		}
		break;
	case "BB49" :
		globalBreadBoardSize = "STPBRD2";
		globalBBPower = "Special6";
		o.style.width = "568px";
		o.style.height = "974px";
		if(globalTopParkVisible == "false" || globalTopParkVisible == false || globalTopParkVisible == null)
		{
			q.style.top = "1044px";
		}
		else
		{
			q.style.top = "1339px";
		}
		break;
	case "BB50" :
		globalBreadBoardSize = "DATAK12-611B";
		globalBBPower = "Special7";
		o.style.width = "778px";
		o.style.height = "463px";
		if(globalTopParkVisible == "false" || globalTopParkVisible == false || globalTopParkVisible == null)
		{
			q.style.top = "533px";
		}
		else
		{
			q.style.top = "828px";
		}
		break;
	case "BB51" :
		globalBreadBoardSize = "PROTOBLOC-2A";
		globalBBPower = "Double";
		o.style.width = "1800px";
		break;
	case "BB52" :
		globalBreadBoardSize = "PROTOBLOC-1A";
		globalBBPower = "Special8";
		o.style.width = "1372px";
		o.style.height = "880px";
		if(globalTopParkVisible == "false" || globalTopParkVisible == false || globalTopParkVisible == null)
		{
			q.style.top = "950px";
		}
		else
		{
			q.style.top = "1245px";
		}
		break;
	case "BB53" :
		globalBreadBoardSize = "DSEH5608";
		globalBBPower = "Special1";
		o.style.width = "749px";
		break;
	case "BB54" :
		globalBreadBoardSize = "AXE021V";
		globalBBPower = "AXE021V-11";
		o.style.width = "524px";
		o.style.height = "618px";
		if(globalTopParkVisible == "false" || globalTopParkVisible == false || globalTopParkVisible == null)
		{
			q.style.top = "688px";
		}
		else
		{
			q.style.top = "983px";
		}
		break;
	case "BB55" :
		globalBreadBoardSize = "FlexiStrip";
		globalBBPower = "FlexiStrip";
		o.style.width = globalBBwidth * 27 + "px" ; // "1155px";
		o.style.height = globalBBheight * 27 + "px";
		if(globalTopParkVisible == "false" || globalTopParkVisible == false || globalTopParkVisible == null)
		{
			q.style.top = globalBBheight * 27 + 70 + "px";
		}
		else
		{
			q.style.top = globalBBheight * 27 + 365 + "px";
		}
		break;
	case "BB56" :

		globalBreadBoardSize = "JaycarMini";
		globalBBPower = "JaycarMini";
		o.style.width = "723px";
		o.style.height = "492px";
		if(globalTopParkVisible == "false" || globalTopParkVisible == false || globalTopParkVisible == null)
		{
			q.style.top = "562px";
		}
		else
		{
			q.style.top = "857px";
		}
		break;
	case "BB57" :
		globalBreadBoardSize = "JaycarHP9558";
		globalBBPower = "JaycarHP9558";
		o.style.width = "989px";
		o.style.height = "1385px";
		if(globalTopParkVisible == "false" || globalTopParkVisible == false || globalTopParkVisible == null)
		{
			q.style.top = "1455px";
		}
		else
		{
			q.style.top = "1750px";
		}
		break;
	case "BB58" :
		globalBreadBoardSize = "JaycarStripBrd";
		globalBBPower = "JaycarHP9540";
		o.style.width = "1022px";
		o.style.height = "813px";
		if(globalTopParkVisible == "false" || globalTopParkVisible == false || globalTopParkVisible == null)
		{
			q.style.top = "883px";
		}
		else
		{
			q.style.top = "1178px";
		}
		break;
	case "BB59" :
		globalBreadBoardSize = "JaycarStripBrd";
		globalBBPower = "JaycarHP9542";
		o.style.width = "1022px";
		o.style.height = "1626px";
		if(globalTopParkVisible == "false" || globalTopParkVisible == false || globalTopParkVisible == null)
		{
			q.style.top = "1696px";
		}
		else
		{
			q.style.top = "1991px";
		}
		break;
	case "BB60" :
		globalBreadBoardSize = "JaycarStripBrd";
		globalBBPower = "JaycarHP9544";
		o.style.width = "1022px";
		o.style.height = "3252px";
		if(globalTopParkVisible == "false" || globalTopParkVisible == false || globalTopParkVisible == null)
		{
			q.style.top = "3322px";
		}
		else
		{
			q.style.top = "3617px";
		}
		break;
	case "BB61" :
		globalBreadBoardSize = "FingerBoard20x10";
		globalBBPower = "FingerBoard";
		o.style.width = "569px";
		o.style.height = "296px";
		if(globalTopParkVisible == "false" || globalTopParkVisible == false || globalTopParkVisible == null)
		{
			q.style.top = "370px";
		}
		else
		{
			q.style.top = "665px";
		}
		break;
	case "BB62" :
		globalBreadBoardSize = "Datak12-600B";
		globalBBPower = "Datak12-600B";
		o.style.width = "1471px";
		o.style.height = "1167px";
		if(globalTopParkVisible == "false" || globalTopParkVisible == false || globalTopParkVisible == null)
		{
			q.style.top = "1237px";
		}
		else
		{
			q.style.top = "1532px";
		}
		break;
	}

	if(val == "BB38")
	{
		q.style.width = "900px";
	}
	else
	{
		q.style.width = o.style.width;
	}

	if(globalTopParkVisible == "false" || globalTopParkVisible == false || globalTopParkVisible == null)
	{
		r.style.width = "0px";
		r.style.top = q.style.top;
	}
	else
	{
		r.style.width = q.style.width
	}

	generatePointArrays();
	o.style.backgroundImage = "url(" + imgObj.src + ")";

    window.localStorage.setItem("lastCircuit", globalBreadBoard.toString())
}

//=============================================


// -------------------------------------------------
// Generates screen coordinates by adding the
// offset of the breadboard container div to
// the calculated points on the breadboard.
// -------------------------------------------------
function generatePointArrays()
{

        dropPointsX = new Array();


// deleted next line - used with early versions before floating menus
//        var bbxl = parseInt(document.getElementById("BreadboardDiv").style.left);
// we now have a component specific div with origin at top left of the total valid
// component area, so we define bbxl and bby as zero (0)
	var bbxl = 0;

        var bbwide = parseInt(document.getElementById("BreadboardDiv").style.width);
        var lsmarg = 50;

        if(globalBreadBoardSize == "AXE021V")
        {
                var bbrows = 8;      //  bbrows = no spaces = No rows - 1
                var bbxr = 250;
		var lsmarg = 152;
        }
        if(globalBreadBoardSize == "STPBRD2")
        {
                var bbrows = 18;      //  bbrows = no spaces = No rows - 1
                var bbxr = 25;
		var lsmarg = 38;
        }
        if(globalBreadBoardSize == "SMALL")
        {
                var bbrows = 22;      //  bbrows = no spaces = No rows - 1
                var bbxr = 50;
        }
        if(globalBreadBoardSize == "GADGETH" )
        {
                var bbrows = 22;
                var bbxr = 173;
                var lsmarg = 93;
        }
        if(globalBreadBoardSize == "DSEH5608")
        {
                var bbrows = 24;
                var bbxr = 45;
        }
        if(globalBreadBoardSize == "DATAK12-611B")
        {
                var bbrows = 25;
                var bbxr = 48;
        }
        if(globalBreadBoardSize == "KIWIP")
        {
                var bbrows = 27;
                var bbxr = 173;
                var lsmarg = 125;
        }
        if(globalBreadBoardSize == "SMALL2")
        {
                var bbrows = 28;      //  bbrows = no spaces = No rows - 1
                var bbxr = 42;
        }
        if(globalBreadBoardSize == "MEDIUM")
        {
                var bbrows = 29;
                var bbxr = 51;
        }
        if(globalBreadBoardSize == "DSEH5613P" || globalBreadBoardSize == "DSEH5613F" )
        {
                var bbrows = 29;
                var bbxr = 49;
        	var lsmarg = 51
        }
        if(globalBreadBoardSize == "SCHOOL")
        {
                var bbrows = 31;
                var bbxr = 200;
        }
        if(globalBreadBoardSize == "DEVBOARD-G1")
        {
		lsmarg = 32;
                var bbrows = 20;
                var bbxr = 503;
        }
        if(globalBreadBoardSize == "GADGETF" )
        {
                var bbrows = 34;
                var bbxr = 102;
                var lsmarg = 80;
        }
        if(globalBreadBoardSize == "LARGE")
        {
                var bbrows = 37;
                var bbxr = 40;
        }
        if(globalBreadBoardSize == "STPBRD1")
        {
                var bbrows = 40;
                var bbxr = 22;
		var lsmarg = 38;
        }
        if(globalBreadBoardSize == "PROTOBLOC-1A")
        {
                var bbrows = 42;
                var bbxr = 182;
		var lsmarg = 213;
        }
        if(globalBreadBoardSize == "BIGGER")
        {
                var bbrows = 43;
                var bbxr = 38;
        }
        if(globalBreadBoardSize == "DSEH5605")
        {
                var bbrows = 44;
                var bbxr = 38;
                var lsmarg = 30;
        }
        if(globalBreadBoardSize == "JaycarMini")
        {
                var bbrows = 19;
                var bbxr = 154;
                var lsmarg = 105;
        }
        if(globalBreadBoardSize == "JaycarHP9558")
        {
                var bbrows = 33;
                var bbxr = 42;
                var lsmarg = 20;
        }
        if(globalBreadBoardSize == "JaycarStripBrd")
        {
                var bbrows = 33;
                var bbxr = 75;
                var lsmarg = 65;
        }
        if(globalBreadBoardSize == "BIGGEST")
        {
                var bbrows = 49;
                var bbxr = 34;
        }
        if(globalBreadBoardSize == "PROTOBLOC-2A")
        {
                var bbrows = 63;
                var bbxr = 44;
        }
 	if(globalBreadBoardSize == "FlexiStrip") // variable sized stripboard
        {
                var bbrows = globalBBwidth - 1;
                var bbxr = 0 - 28;
		var lsmarg = 12;
		bbwide = globalBBwidth * 27
	}
 	if(globalBreadBoardSize == "FingerBoard20x10") // 20x10 Finger Board - Stan Swan SiChip article
        {
                var bbrows = 19;
                var bbxr = -2;
		var lsmarg = 27;
	}
	if(globalBreadBoardSize == "Datak12-600B") // Datak Prototyping board == Altronics H0719
        {
                var bbrows = 50; // actually this board has 51 rows (not 50 per silk mask) ==> 0 - 50
                var bbxr = 65;
		var lsmarg = 60;
	}



// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  

        var www = bbwide - 57 - bbxr;
        var xquant = www / bbrows;
        for(var i = 0; i <= bbrows; ++ i)
        {
                if(globalBreadBoardSize == "SCHOOL")     // 23 rows plus right side parking area
                {
                        if(i == 23) // leave a vertical gap at the right side of BB before off - board "parking" area
                        {
                                continue;
                        }
                }
                if(globalBreadBoardSize == "KIWIP")     // 23 rows plus left and right extras
                {
                        if(i == 1 || i == 25 ) // leave a vertical gap both sides of the main board area
                        {
                                continue;
                        }
                }
                if(globalBreadBoardSize == "PROTOBLOC-1A")     // 30 rows plus left and right extras
                {
                        if(i == 2 || i == 33 || i == 36 ) // leave a vertical gap both sides of the main board area
                        {
                                continue;
                        }
                }
                if(globalBreadBoardSize == "JaycarHP9558")     // 30 rows plus two extra offset at the left side
                {
                        if(i == 2 || i == 3 ) // leave a vertical gap between left side extras and the main board area
                        {
                                continue;
                        }
                }
                dropPointsX.push(Math.round(bbxl + lsmarg +  (xquant * i)));
        }

        if(globalBreadBoardSize == "DEVBOARD-G1")  // define some row in line with OLED displays for display location purposes
        {
		dropPointsX.push(Math.round(bbxl + lsmarg +  (xquant * 22)));
		dropPointsX.push(Math.round(bbxl + lsmarg +  (xquant * 26)));
		dropPointsX.push(Math.round(bbxl + lsmarg +  (xquant * 30)));
        }

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  

        dropPointsY = new Array();
	var bbcols = 27;    //  18 columns for standard breadboards, 1 space between BB and Parking area and 9 for parking area

	if (globalBBPower == "Special2")
	{
		bbcols = 39;  // DSE-5613 protoboard has many extra columns of holes 
	}
	if (globalBBPower == "Special3")
	{
		bbcols = 29;  // Gadget half-board has one extra column of holes 
	}
	if (globalBBPower == "Special4")
	{
		bbcols = 39;  // Gadget full-board has many extra columns of holes 
	}
	if (globalBBPower == "Special5")
	{
		bbcols = 36;  // 4D SYstem DevBoard G1 
	}
	if (globalBBPower == "Special6")
	{
		bbcols = 45;  // Futurlec stripboards STPBRD1 and STPBRD2 
	}
	if (globalBBPower == "Special7")
	{
		bbcols = 26;  // DATAK 12-611B protoboard 
	}
	if (globalBBPower == "Special8")
	{
		bbcols = 40;  // Protobloc 1A Breadboard 
	}
	if (globalBBPower == "AXE021V-11")
	{
		bbcols = 21;  // AXE021 in vertical oientation
	}
	if (globalBBPower == "DoubleBB")
	{
		bbcols = 46;  // Double BBs side by side 
	}
	if (globalBBPower == "JaycarMini")
	{
		bbcols = 26;  // Jaycar HP9556 Mini Proto Board
	}
	if (globalBBPower == "JaycarHP9558")
	{
		bbcols = 59;  // Jaycar HP95586 Large Proto Board
	}
	if (globalBBPower == "JaycarHP9540")
	{
		bbcols = 39;  // Jaycar Proto Board
	}
	if (globalBBPower == "JaycarHP9542")
	{
		bbcols = 69;  // Jaycar Large Proto Board
	}
	if (globalBBPower == "JaycarHP9544")
	{
		bbcols = 129;  // Jaycar Very Large Proto Board
	}
	if (globalBBPower == "FlexiStrip")
	{
		bbcols = globalBBheight * 1 + 9;  // variable sized stripboard
	}
      	if (globalBBPower == "FingerBoard")
	{
		bbcols = 20 ;  // 20x10 Finger Board for Stan Swan SiChip Article
	}
      	if (globalBBPower == "Datak12-600B")
	{
		bbcols = 50 ;  // Datak 12-600B / Altronics H0719 proto board
	}

// here for checking if there is a top off-board area or not)


        var yquant = (457 - 45) / 15;

        if(globalTopParkVisible == "true" || globalTopParkVisible == true)
        {
	var topadj = 38;       // use this value for the top off-board area only

// deleted next line - used with early versions before floating menus
//        var bby = parseInt(document.getElementById("TopparkboardDiv").style.top);
// we now have a component specific div with origin at top left of the total valid
// component area, so we define bbxl and bby as zero (0)
	var bby = 0;


                for(var m = 0; m <= 8; ++ m)
                {
        	        dropPointsY.push(Math.round(bby + topadj + (yquant * m)));
                }
                topadj = 313;       // and then modify the top adjust value for the actual breadboard and lower off-board area
        }
        else
        {
	var topadj = 18      // now 18 was 45 now 27 less for extra row at top as standard


//
//	var bby = parseInt(document.getElementById("BreadboardDiv").style.top);
	var bby = 0;
        }

                if(globalBBPower == "Special6")
                {
			var topadj = topadj + 21 //   var topadj = 39;
			var yquant = (935-39)/33; 
		}
                if(globalBBPower == "Special7")
                {
			var topadj = topadj + 8 //  var topadj = 26;
		//	var yquant = (430-28)/15; 
		}
                if(globalBBPower == "Special8")
                {
			var topadj = topadj + 24 //  var topadj = 42;
		//	var yquant = (430-28)/15; 
		}
                if(globalBBPower == "AXE021V-11")
                {
			var topadj = topadj + 279 //  var topadj = 297;
		//	var yquant = 270 / 10; 
		}

		if (globalBBPower == "FlexiStrip")
                {
			var topadj = topadj + 21 - 29 //   var topadj = 39;
			var yquant = (935-39)/33; 
		}
		if (globalBBPower == "JaycarMini")
		{
			var topadj = topadj + 22 //  var topadj = 40;
		}
		if (globalBBPower == "JaycarHP9558")
		{
			var topadj = topadj + 14 //  var topadj = 32;
			var yquant = 27;
		}
        	if(globalBreadBoardSize == "JaycarStripBrd")
		{
			var topadj = topadj - 8  // + 14 //  var topadj = 32;
			var yquant = 3232/119;
		}
        	if(globalBreadBoardSize == "FingerBoard20x10")
		{
			var topadj = topadj + 6  //  var topadj = 24;
			 // var yquant = 296/11;
		}
        	if(globalBreadBoardSize == "Datak12-600B")
		{
			var topadj = topadj + 29  //  var topadj = 47;
			  var yquant = 1070 / 39;
		}

// -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  -  

        for(var m = 0; m <= bbcols; ++ m)
        {
                if(globalBBPower == "Single")     // single outer rails and no inner rails
                {
                        if(m == 0 || m == 2 || m == 8 || m == 9 || m == 15 || m == 17 || m == 18)
                        {
                                continue;
                        }
                }
                if(globalBBPower == "Double")    // double outer rails and no inner rails
                {
                        if(m == 2 || m == 8 || m == 9 || m == 15 || m == 18)
                        {
                                continue;
                        }
                }
                if(globalBBPower == "Triple")    // double outer rails plus double inner rails
                {
                        if(m == 2 || m == 15 || m == 18)
                        {
                                continue;
                        }
                }
                if(globalBBPower == "KiwiFull")    // offset double outer rails plus double inner rails
                {
                        if(m == 0 || m == 17 || m == 18)
                        {
                                continue;
                        } 
                }
                if (globalBBPower == "Special1")    // there are no spare sets of holes for DSEH5613
                {
                        if(m == 18)   // only unused row is between board and off-board parking area
                        {
                                continue;
                        }
                }
                if (globalBBPower == "Special2")    // there are no spare sets of holes for DSEH5613
                {
                        if(m == 30)   // only unused row is between board and off-board parking area
                        {
                                continue;
                        }
                }
                if (globalBBPower == "Special3")    // there are no spare sets of central holes for Gadget half board
                {
                        if(m == 0 || m == 1 || m == 19)
                        {
                                continue;
                        }
                }
                if (globalBBPower == "Special4")    // there are no spare sets of central holes for Gadget full board
                {
                        if(m == 0 || m == 1 || m == 26 || m == 27 || m == 28 || m == 29 )
                        {
                                continue;
                        }
                }
                if (globalBBPower == "Special5")    // special config for the 4D Systems Devboard G1 to permit displays and jumpers
                {
                        if(m == 1 || m == 2 || m == 6 || m == 10 || m == 11 || m == 13 || m == 19 || m == 20 || m == 26 )
                        {
                                continue;
                        }
                }
                if (globalBBPower == "Special6")    // Futurlec small and large stripboards
                {
                        if(m == 34 || m == 35 )
                        {
                                continue;
                        }
                }
                if (globalBBPower == "Special7")    // Dick SMith / Datak stripboard
                {
                        if(m == 16)
                        {
                                continue;
                        }
                }
                if (globalBBPower == "Special8")    // special config for the 4D Systems Devboard G1 to permit displays and jumpers
                {
                        if(m == 6 || m == 7 || m == 14 || m == 15 || m == 22 || m == 23 || m == 30 )
                        {
                                continue;
                        }
                }
                if (globalBBPower == "AXE021V-11")    // special config for the 4D Systems Devboard G1 to permit displays and jumpers
                {
                        if(m == 11 || m == 12 )
                        {
                                continue;
                        }
                }
                if(globalBBPower == "DoubleBB")    // double outer rails and no inner rails with two BB's side by side
                {
                        if(m == 2 || m == 8 || m == 9 || m == 15 || m == 18)
                        {
                                continue;
                        }
                        if(m == 21 || m == 27 || m == 28 || m == 34 || m == 37)
                        {
                                continue;
                        }

                }
		if (globalBBPower == "FlexiStrip")  // variable sized stripboard
                {

                        if(m == globalBBheight)
                        {
                                continue;
                        }
		}
		if (globalBBPower == "JaycarMini")
                        if(m == 16 || m == 17 )
                        {
                                continue;
                        }
		if (globalBBPower == "JaycarHP9558")
                        if(m == 50 )
                        {
                                continue;
                        }

		if (globalBBPower == "JaycarHP9540")
                        if(m == 30 )
                        {
                                continue;
                        }
		if (globalBBPower == "JaycarHP9542")
                        if(m == 60 )
                        {
                                continue;
                        }
		if (globalBBPower == "JaycarHP9544")
                        if(m == 120 )
                        {
                                continue;
                        }
		if (globalBBPower == "FingerBoard")
                        if(m == 10 )
                        {
                                continue;
                        }
		if (globalBBPower == "Datak12-600B")
                        if(m == 40 || m == 41 )
                        {
                                continue;
                        }


                dropPointsY.push(Math.round(bby + topadj + (yquant * m)));

        }
}

//=============================================

function loadreqdBBimage(val)
{
  switch(val)
        {
	case "BB1" :
		// BB1.src is defined in initialisation at startup
		break;
	case "BB2" :
		BB2.src  = "images/BB23102.gif";
		break;
	case "BB3" :
		BB3.src  = "images/BB23111.gif";
		break;
	case "BB4" :
		BB4.src  = "images/BB23121.gif";
		break;
	case "BB5" :
		BB5.src  = "images/BB23201.gif";
		break;
	case "BB6" :
		BB6.src  = "images/BB23202.gif";
		break;
	case "BB7" :
		BB7.src  = "images/BB23211.gif";
		break;
	case "BB8" :
		BB8.src  = "images/BB23221.gif";
		break;
	case "BB9" :
		BB9.src  = "images/BB23233.gif";
		break;
	case "BB10" :
		BB10.src = "images/BB30111.gif";
		break;
	case "BB11" :
		BB11.src = "images/BB30211.gif";
		break;
	case "BB12" :
		BB12.src = "images/BB30231.gif";
		break;
	case "BB13" :
		BB13.src = "images/BB38101.gif";
		break;
	case "BB14" :
		BB14.src = "images/BB38102.gif";
		break;
	case "BB15" :
		BB15.src = "images/BB38111.gif";
		break;
	case "BB16" :
		BB16.src = "images/BB38121.gif";
		break;
	case "BB17" :
		BB17.src = "images/BB38201.gif";
		break;
	case "BB18" :
		BB18.src = "images/BB38202.gif";
		break;
	case "BB19" :
		BB19.src = "images/BB38211.gif";
		break;
	case "BB20" :
		BB20.src = "images/BB38221.gif";
		break;
	case "BB21" :
		BB21.src = "images/BB44101.gif";
		break;
	case "BB22" :
		BB22.src = "images/BB44102.gif";
		break;
	case "BB23" :
		BB23.src = "images/BB44111.gif";
		break;
	case "BB24" :
		BB24.src = "images/BB44121.gif";
		break;
	case "BB25" :
		BB25.src = "images/BB44201.gif";
		break;
	case "BB26" :
		BB26.src = "images/BB44202.gif";
		break;
	case "BB27" :
		BB27.src = "images/BB44211.gif";
		break;
	case "BB28" :
		BB28.src = "images/BB44221.gif";
		break;
	case "BB29" :
		BB29.src = "images/BB50101.gif";
		break;
	case "BB30" :
		BB30.src = "images/BB50102.gif";
		break;
	case "BB31" :
		BB31.src = "images/BB50111.gif";
		break;
	case "BB32" :
		BB32.src = "images/BB50121.gif";
		break;
	case "BB33" :
		BB33.src = "images/BB50201.gif";
		break;
	case "BB34" :
		BB34.src = "images/BB50202.gif";
		break;
	case "BB35" :
		BB35.src = "images/BB50211.gif";
		break;
	case "BB36" :
		BB36.src = "images/BB50221.gif";
		break;
	case "BB37" :
		BB37.src = "images/BB23234.gif";
		break;
	case "BB38" :
		BB38.src = "images/BB23113.gif";
		break;
	case "BB39" :
		BB39.src = "images/BB45103.gif";
		break;
	case "BB40" :
		BB40.src = "images/BB30203.gif";
		break;
	case "BB41" :
		BB41.src = "images/BB30204.gif";
		break;
	case "BB42" :
		BB42.src = "images/BB23104.gif";
		break;
	case "BB43" :
		BB43.src = "images/BB35104.gif";
		break;
	case "BB44" :
		BB44.src = "images/BB38214.gif";
		break;
	case "BB45" :
		BB45.src = "images/BB50214.gif";
		break;
	case "BB46" :
		BB46.src = "images/BB29201.gif";
		break;
	case "BB47" :
		BB47.src = "images/BB17001.gif";
		break;
	case "BB48" :
		BB48.src = "images/BB41004.gif";
		break;
	case "BB49" :
		BB49.src = "images/BB19004.gif";
		break;
	case "BB50" :
		BB50.src = "images/BB26004.gif";
		break;
	case "BB51" :
		BB51.src = "images/BB64211.gif";
		break;
	case "BB52" :
		BB52.src = "images/BB30441.gif";
		break;
	case "BB53" :
		BB53.src = "images/BB25004.gif";
		break;
	case "BB54" :
		BB54.src = "images/AXE021_1.gif";
		break;
	case "BB55" :
		BB55.src = "images/BB50005.gif";
		break;
	case "BB56" :
		BB56.src = "images/BB20214.gif";
		break;
	case "BB57" :
		BB57.src = "images/BB30234.gif";
		break;
	case "BB58" :
		BB58.src = "images/BB34004.gif";
		break;
	case "BB59" :
		BB59.src = "images/BB34004.gif";
		break;
	case "BB60" :
		BB60.src = "images/BB34004.gif";
		break;
	case "BB61" :
		BB61.src = "images/BB20105.gif";
		break;
	case "BB62" :
		BB62.src = "images/BB50004.gif";
		break;
	}
}

//=============================================
