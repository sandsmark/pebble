/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * dom - drag.js
 * 09.25.2001
 * www.youngpup.net
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * 10.28.2001 - fixed minor bug where events
 * sometimes fired off the handle, not the root.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
var Drag =
{
        obj : null,
        init : function(o)
        {
                o.onmousedown   = Drag.start;
                o.ondblclick    = Drag.doDoubleClick;

                if (isNaN(parseInt(o.style.left))) o.style.left = "0px";
                if (isNaN(parseInt(o.style.top ))) o.style.top  = "0px";
        }
        ,

        start : function(e)
        {
                e = Drag.fixE(e);

                switch(getEventSource(e).nodeName)
                {
                        case "INPUT" :
                        case "SELECT" :
                        case "OPTION" :
                                return;
                }

                var o = Drag.obj = this;
                var y = parseInt(o.style.top);
                var x = parseInt(o.style.left);
                var partsbin = getElementAttribute(o, "partsbin");
                var parttype = getElementAttribute(o, "parttype");

                if(parttype && partsbin == "true")
                {
                        var newObject = createNewComponent(o, new Point(0, 0));
                        if(newObject)
                        {
                                o = Drag.obj = newObject;

//
// below are extra lines added by Westaust55 to ensure component drags properly from floating menu
				var tempx1 = parseInt(ComponentlayerDiv.style.left); 
				var tempy1 = parseInt(ComponentlayerDiv.style.top); 
				var tempx2 = parseInt(newObject.style.left); 
				var tempy2 = parseInt(newObject.style.top); 
				var tempx3 = parseInt(menudiv.style.left); 
				var tempy3 = parseInt(menudiv.style.top); 
				newObject.style.left = tempx2 + tempx3 + 5 + ( tempx1 * -1 ) +"px";

				newObject.style.top = tempy2 + tempy3 + 5 + (tempy1 * -1 ) +"px";

// temporarily make the new component z-index higher than either menu level while dragging
				newObject.style.zIndex = 30;

                        }
                        else
                        {
                                return;
                        }
                }
                else
                {
                        o = Drag.obj = this;
                }
                o.lastMouseX = e.clientX;
                o.lastMouseY = e.clientY;
                document.onmousemove	 = Drag.drag;
                document.onmouseup	 = Drag.end;
                return false;
        }
        ,

        drag : function(e)
        {
                e = Drag.fixE(e);
                var o = Drag.obj;

                var ey	 = e.clientY;
                var ex	 = e.clientX;

                var y = parseInt(o.style.top);
                var x = parseInt(o.style.left);

                var nx = x + (ex - o.lastMouseX);
                var ny = y + (ey - o.lastMouseY);

                Drag.obj.style["left"] = nx + "px";
                Drag.obj.style["top"]  = ny + "px";

                Drag.obj.lastMouseX	 = ex;
                Drag.obj.lastMouseY	 = ey;

                return false;
        }
        ,

        end : function()
        {
                var componentRef = globalBreadBoard.find(Drag.obj.id);
                var oLeft = parseInt(Drag.obj.style.left);
                var oTop = parseInt(Drag.obj.style.top);

                 if(componentRef && componentRef.compType != "Note" )
                 {
		    if(componentRef && componentRef.compType != "Slider")
		    {
                        var ofst = getDropOffset(componentRef);
                        oLeft += - (ofst.x);
                        oTop  += - (ofst.y);
                        var pt = findLandingXY(oLeft, oTop);
                        var ofst = getDropOffset(componentRef);

                        if(pt)
                        {
                                pt.x += ofst.x;
                                pt.y += ofst.y;

                                Drag.obj.style.left = pt.x + "px";
                                Drag.obj.style.top  = pt.y + "px";
                        }
		    }
		    else
                    {
//  here if it is a Floating/Slider type part
                        Drag.obj.style["left"] = oLeft;
                        Drag.obj.style["top"]  = oTop;
                    }
                }
		else
//  here if it is a Note type part
                {
                       Drag.obj.style["left"] = oLeft;
                       Drag.obj.style["top"]  = oTop;
                }





// now when dropping, return the new component z-index to the standard component level = 10 (and user adjustable for wires)

                var parttype = getElementAttribute(Drag.obj, "parttype");
                	if(parttype == "Wire")
                	{
                	 var complevel = componentRef.pins;	// can adjust the z-index value for wires only
                	} 
			else
			{
			 var complevel = 10;			// all components other always have z-index = 10
			}
		Drag.obj.style.zIndex = parseInt(complevel);

                document.onmousemove = null;
                document.onmouseup   = null;

                if(componentRef)
                {
                        componentRef.x = parseInt(Drag.obj.style["left"]);
                        componentRef.y = parseInt(Drag.obj.style["top"]);
                }
                Drag.obj = null;

            window.localStorage.setItem("lastCircuit", globalBreadBoard.toString())
        }
        ,

        fixE : function(e)
        {
                if (typeof e == 'undefined') e = window.event;
                if (typeof e.layerX == 'undefined') e.layerX = e.offsetX;
                if (typeof e.layerY == 'undefined') e.layerY = e.offsetY;
                return e;
        }
        ,

        doDoubleClick : function(e)
        {
                openDialog(e);
        }

}
;
