// -----------------------------------------------------
// Mini Browser Independent DOM API
// Author : Ray Wilson 2 - 28 - 2006
// -----------------------------------------------------
var mozilla = document.getElementById && ! document.all;
var ie = document.all;

function getNewId()
{
        var alpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var nums = "1234567890";
        var newid = "";
        for(var i = 0; i < 16; ++ i)
        {
                newid += alpha.charAt(Math.floor(Math.random() * alpha.length));
                newid += nums.charAt(Math.floor(Math.random() * nums.length));
        }
        return newid;
}

// -----------------------------------
// StringBuffer object
// -----------------------------------
function StringBuffer()
{
        this.buffer = [];
}
StringBuffer.prototype.append = function (string)
{
        this.buffer.push(string);

}
;

StringBuffer.prototype.toString = function ()
{
        return this.buffer.join("");

}
;

String.prototype.trim = function()
{
        return this.replace(/^\s*|\s*$/g, "");

}

function getHTMLFragmentFromServer(url, clickTarget)
{
        var req;
        if(mozilla)
        {
                req = new XMLHttpRequest();
        }
        else
        {
                req = new ActiveXObject("Microsoft.XMLHTTP");
        }
        req.open('GET', url, true);
        req.onreadystatechange = function ()
        {
                if (req.readyState == 4)
                {
                        if(req.status == 200)
                        {
                                var htmlString = req.responseText;
                                insertHTMLAfterElement(clickTarget, htmlString);
                                postHTMLInsert(clickTarget);
                        }
                        else
                        {
                                alert("Method getHTMLFragmentFromServer failed.");
                        }
                }
        }
        ;
        req.send(null);
}

function insertHTMLAfterElement(clickTarget, htmlString)
{
        if(mozilla)
        {
                var parent = getElementParent(clickTarget)
                var range = document.createRange();
                range.selectNode(parent);
                var documentFragment = range.createContextualFragment(htmlString);
                parent.appendChild(documentFragment);
        }
        else
        {
                getElementParent(clickTarget).insertAdjacentHTML("BeforeEnd", htmlString);
        }
}

function hasChildren(elem)
{
        return elem.hasChildNodes();
}

function getElementParent(elem)
{
        return (mozilla) ? elem.parentNode : elem.parentElement;
}

function getElementChildren(elem)
{
        return (mozilla) ? elem.childNodes : elem.children;
}

// Deprecated... Just use elem.setAttribute(attname, attvalue);
function setElementAttribute(elem, attname, attvalue)
{
        elem.setAttribute(attname, attvalue);
}

function getElementAttribute(elem, attname)
{
        if(elem.hasAttribute || elem.attributes)
        {
                if(mozilla)
                {
                        if(elem.hasAttribute(attname))
                        return elem.getAttribute(attname);
                        else
                        return null;
                }
                else
                {
                        if(elem.attributes[attname])
                        {
                                return elem.attributes[attname].value;
                        }
                        else
                        {
                                return null;
                        }
                }
        }
}

function getEvent(e)
{
        if( ! e)
        {
                return window.event;
        }
        return e;
}

function stopEventBubble(e)
{
        if (mozilla)
        {
                e.stopPropagation();
        }
        else if (ie)
        {
                e.cancelBubble = true;
        }
}

function getEventSource(e)
{
        return (mozilla) ? e.target : e.srcElement;
}

function parseQueryString()
{
        var queryString = new Object();
        var qs = self.location.search;
        if(qs.charAt(0) == "?")
        {
                qs = qs.substring(1);
        }
        if (qs.length == 0)
        {
                return queryString;
        }
        qs = qs.replace(/\+/g, ' ');
        var args = qs.split('&');
        for (var i = 0; i < args.length; ++ i)
        {
                var value;
                var pair = args[i].split('=');
                var name = unescape(pair[0]);
                if (pair.length == 2)
                {
                        value = unescape(pair[1]);
                }
                else
                {
                        value = name;
                }
                queryString[name] = value;
        }
        return queryString;
}
