function BBComponent(componentType, componentValue, xPos, yPos, orient, pnum, desig, color, sz, pkg, txt, pins, imageName)
{
        this.compType = componentType;
        this.compValue = componentValue;
        this.x = xPos;
        this.y = yPos;
        this.orientation = (typeof(orient) == "undefined") ? "1" : orient;
        this.partnumber = (typeof(pnum) == "undefined") ? "" : pnum;
        this.designator = (typeof(desig) == "undefined") ? "" : desig;
        this.color = (typeof(color) == "undefined") ? "#000000" : color;
        this.compSize = (typeof(sz) == "undefined") ? "1" : sz;
        this.package = (typeof(pkg) == "undefined") ? "DIP8" : pkg;
        this.text = (typeof(txt) == "undefined") ? "" : txt;
        this.pins = (typeof(pins) == "undefined") ? "c b e" : pins;
        this.imgname = (typeof(imageName) == "undefined") ? "none" : imageName;
        this.id = getNewId();
}

BBComponent.prototype.toString = new Function(
"return this.compType + '|' + " +
"this.compValue + '|' + " +
"this.x + '|' + " +
"this.y + '|' + " +
"this.orientation + '|' + " +
"this.partnumber + '|' + " +
"this.designator + '|' + " +
"this.color + '|' + " +
"this.compSize + '|' + " +
"this.package + '|' + " +
"this.text + '|' + " +
"this.pins + '|' + " +
"this.imgname;"
);



