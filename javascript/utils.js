var wireColors = "#000000,#CC6633,#FF0000,#FF9900,#FFFF00,#00A060,#3253FF,#A233C3,#999999,#FFFFCC".split(",");
var dropPointsX = null;
var dropPointsY = null;


function getWireHTML(orient, woff, wend1, wend2, woff1, woff2, newval, color, containerElement)
{
        var len;
        var adjust;
        var lenadj1 = 0;
        var lenadj2 = 0;
        var strght = 0;
        var notopl = 0;
        var nobotr = 0;

        if( woff == 1 && (wend1 == 1 || wend1 == 3 ) && (wend2 == 1 || wend2 == 3) )
        {
                strght = 1;
                // a flag for when the wire is entirely straight
        }
        if ( woff == 3 || wend1 == 2 || wend2 == 2)
        {
                notopl = 1;
                // a flag for when the wire is entirely downwards
        }
        if ( woff == 2 || wend1 == 4 || wend2 == 4)
        {
                nobotr = 1;
                // a flag for when the wire is entirely upwards
        }

        var html = new StringBuffer();
        html.append("<table cellpadding=0 cellspacing=0 width=100%>");

        if(orient == "1") // HORIZONTAL wire
        {
                adjust = 12;
                if(wend1 != 1)
                {
                        lenadj1 = (woff1 - 2) * 9;
                }
                if(wend2 != 1)
                {
                        lenadj2 = (2 - woff2) * 9;
                }
                if(wend1 != 1 )
                {
                        adjust = adjust - 2;
                }
                if(wend2 != 1)
                {
                        adjust = adjust - 2;
                }


                var xquant = (644 - 50) / 22
                containerElement.style.height = "8px";
                len = containerElement.style.width = (newval * xquant - adjust - lenadj1 - lenadj2 ) + "px";

                if(strght == 0 && notopl == 1)
                {
                        html.append("<tr height=6px>");

                        if(wend1 == "1" && woff == "3")   // show bare upward wire end
                        {
                                html.append("<td class=wireTD width=1%><img src='images/wireend9.gif'></td>");
                        }
                        else if( wend1 == "2")             // show insulated upward wire end
                        {
                                html.append("<td style='background-color:");
                                html.append(color);
                                html.append(";' class='wireTD'><img src='images/transparent1x1.gif' height='6px' width='8px'></td>");
                        }
                        else                                 // an empty / transparent cell
                        {
                                html.append("<td class=wireTD width=1%><img src='images/transparent1x1.gif'></td>");
                        }

                        html.append("<td class=wireTD width=1%><img src='images/transparent1x1.gif'></td>");
                        if(wend2 == 1 && woff == 3)   // show bare upward wire end
                        {
                                html.append("<td class=wireTD width=1%><img src='images/wireendA.gif'></td>");
                        }
                        else if( wend2 == 2)             // show insulated upward wire end
                        {
                                html.append("<td style='background-color:");
                                html.append(color);
                                html.append(";' class='wireTD'><img src='images/transparent1x1.gif' height='6px' width='8px'></td>");
                        }
                        else                                 // an empty / transparent cell
                        {
                                html.append("<td class=wireTD width=1%><img src='images/transparent1x1.gif'></td>");
                        }
                        html.append("</tr>")
                }

                html.append("<tr height=8px>");
                if(wend1 == "1")
                {
                        html.append("<td class=wireTD width=1%><img src='images/wireend");
                        if(woff == "1")   // show bare straight wire end
                        {
                                html.append("1.gif'></td>");
                        }
                        if(woff == "2")   // show bare curved downward wire end
                        {
                                html.append("5.gif'></td>");
                        }
                        if(woff == "3")   // show bare curved upward wire end
                        {
                                html.append("7.gif'></td>");
                        }
                }
                else 		             // show insulated straight wire end in the selected colour
                {
                        html.append("<td style='background-color:");
                        html.append(color);
                        html.append(";' class='wireTD'><img src='images/transparent1x1.gif' height='8px' width='8px'></td>");
                }
                html.append("<td style='background-color:");
                html.append(color);
                html.append(";' class='wireTD'><img src='images/transparent1x1.gif' height='7px' width='");
                html.append(len);
                html.append("'></td>");

                if(wend2 == "1")
                {
                        html.append("<td class=wireTD width=1%><img src='images/wireend");
                        if(woff == "1")   // show bare straight wire end
                        {
                                html.append("3.gif'></td>");
                        }
                        if(woff == "2")   // show bare curved downward wire end
                        {
                                html.append("6.gif'></td>");
                        }
                        if(woff == "3")   // show bare curved upward wire end
                        {
                                html.append("8.gif'></td>");
                        }
                }
                else 		             // show insulated straight wire end
                {
                        html.append("<td style='background-color:");
                        html.append(color);
                        html.append(";' class='wireTD'><img src='images/transparent1x1.gif' height='8px' width='8px'></td>");
                }
                html.append("</tr>")

                if(strght == 0 && nobotr == 1)
                {
                        html.append("<tr height=6px>");

                        if(wend1 == "1" && woff == "2")   // show bare downward wire end
                        {
                                html.append("<td class=wireTD width=1%><img src='images/wireend9.gif'></td>");
                        }
                        else if( wend1 == "4")               // show insulated downward wire end
                        {
                                html.append("<td style='background-color:");
                                html.append(color);
                                html.append(";' class='wireTD'><img src='images/transparent1x1.gif' height='6px' width='8px'></td>");
                        }

                        else                                 // an empty / transparent cell
                        {
                                html.append("<td class=wireTD width=1%><img src='images/transparent1x1.gif'></td>");
                        }

                        html.append("<td class=wireTD width=1%><img src='images/transparent1x1.gif'></td>");
                        if(wend2 == 1 && woff == 2)   // show bare downward wire end
                        {
                                html.append("<td class=wireTD width=1%><img src='images/wireendA.gif'></td>");
                        }
                        else if( wend2 == 4)             // show insulated downward wire end
                        {
                                html.append("<td style='background-color:");
                                html.append(color);
                                html.append(";' class='wireTD'><img src='images/transparent1x1.gif' height='6px' width='8px'></td>");
                        }
                        else                                 // an empty / transparent cell
                        {
                                html.append("<td class=wireTD width=1%><img src='images/transparent1x1.gif'></td>");
                        }
                        html.append("</tr>")
                }
        }


        if(orient == "2") //  VERTICAL
        {
                adjust = 11;
                if(wend1 != 1)
                {
                        lenadj1 = (woff1 - 2) * 9 ;
                }
                if(wend2 != 1)
                {
                        lenadj2 = (2 - woff2) * 9;
                }
                if(wend1 != 1 )
                {
                        adjust = adjust - 2;
                }
                if(wend2 != 1)
                {
                        adjust = adjust - 2;
                }
                var yquant = (457 - 45) / 15;
                containerElement.style.width = "8px";
                len = containerElement.style.height = (newval * yquant - adjust - lenadj1 - lenadj2) + "px";

                html.append("<tr height=8px>");

                if(strght != 1)
                {
                        if(wend1 == "1" && woff == "3")   // show bare leftward wire end
                        {
                                html.append("<td class=wireTD width=1%><img src='images/wireendF.gif'></td>");
                        }
                        else if( wend1 == "2")             // show insulated leftward wire end
                        {
                                html.append("<td style='background-color:");
                                html.append(color);
                                html.append(";' class='wireTD'><img src='images/transparent1x1.gif' height='8px' width='6px'></td>");
                        }
                        else                                 // an empty / transparent cell
                        {
                                html.append("<td class=wireTD width=1%><img src='images/transparent1x1.gif'></td>");
                        }
                }
                if(wend1 == "1")
                {
                        html.append("<td class=wireTD width=1%><img src='images/wireend");
                        if(woff == "1")   // show bare straight wire end
                        {
                                html.append("2.gif'></td>");
                        }
                        if(woff == "2")   // show bare curved downward wire end
                        {
                                html.append("D.gif'></td>");
                        }
                        if(woff == "3")   // show bare curved upward wire end
                        {
                                html.append("B.gif'></td>");
                        }
                }
                else 		             // show insulated straight wire end in the selected colour
                {
                        html.append("<td style='background-color:");
                        html.append(color);
                        html.append(";' class='wireTD'><img src='images/transparent1x1.gif' height='8px' width='8px'></td>");
                }

                if(strght != 1)
                {
                        if(wend1 == 1 && woff == 2)   // show bare rightward wire end
                        {
                                html.append("<td class=wireTD width=1%><img src='images/wireendF.gif'></td>");
                        }
                        else if( wend1 == 4)             // show insulated rightward wire end
                        {
                                html.append("<td style='background-color:");
                                html.append(color);
                                html.append(";' class='wireTD'><img src='images/transparent1x1.gif' height='8px' width='6px'></td>");
                        }
                        else                                 // an empty / transparent cell
                        {
                                html.append("<td class=wireTD width=1%><img src='images/transparent1x1.gif'></td>");
                        }
                }
                html.append("</tr>")
                html.append("<tr height=8px>");

                if(strght != 1)
                {
                        html.append("<td class=wireTD width=1%><img src='images/transparent1x1.gif'></td>");
                }
                html.append("<td style='background-color:");
                html.append(color);
                html.append(";' class='wireTD'><img src='images/transparent1x1.gif' width='7px' height='");
                html.append(len);
                html.append("'></td>");

                if(strght != 1)
                {
                        html.append("<td class=wireTD width=1%><img src='images/transparent1x1.gif'></td>");
                }
                html.append("</tr>")
                html.append("<tr height=8px>");

                if(strght != 1)
                {
                        if(wend2 == "1" && woff == "3")   // show bare downward wire end
                        {
                                html.append("<td class=wireTD width=1%><img src='images/wireendG.gif'></td>");
                        }
                        else if( wend2 == "2")               // show insulated downward wire end
                        {
                                html.append("<td style='background-color:");
                                html.append(color);
                                html.append(";' class='wireTD'><img src='images/transparent1x1.gif' height='8px' width='6px'></td>");
                        }
                        else                                 // an empty / transparent cell
                        {
                                html.append("<td class=wireTD width=1%><img src='images/transparent1x1.gif'></td>");
                        }
                }
                if(wend2 == "1")
                {
                        html.append("<td class=wireTD width=1%><img src='images/wireend");
                        if(woff == "1")   // show bare straight wire end
                        {
                                html.append("4.gif'></td>");
                        }
                        if(woff == "2")   // show bare curved downward wire end
                        {
                                html.append("E.gif'></td>");
                        }
                        if(woff == "3")   // show bare curved upward wire end
                        {
                                html.append("C.gif'></td>");
                        }
                }
                else 		             // show insulated straight wire end
                {
                        html.append("<td style='background-color:");
                        html.append(color);
                        html.append(";' class='wireTD'><img src='images/transparent1x1.gif' height='8px' width='8px'></td>");
                }

                if(strght != 1)
                {
                        if(wend2 == 1 && woff == 2)   // show bare downward wire end
                        {
                                html.append("<td class=wireTD width=1%><img src='images/wireendG.gif'></td>");
                        }
                        else if( wend2 == 4)             // show insulated downward wire end
                        {
                                html.append("<td style='background-color:");
                                html.append(color);
                                html.append(";' class='wireTD'><img src='images/transparent1x1.gif' height='8px' width='6px'></td>");
                        }
                        else                                 // an empty / transparent cell
                        {
                                html.append("<td class=wireTD width=1%><img src='images/transparent1x1.gif'></td>");
                        }
                }
                html.append("</tr>")
        }
        html.append("</table>");
        return html.toString();
}



function getDivHTML(x, y, h, w, color)
{
        var html = new StringBuffer();
        html.append("<div style='position:absolute;font-size:1px;padding:0px;margin:0px;");
        html.append("left:");
        html.append(x)
        html.append("px;top:");
        html.append(y);
        html.append("px;background-color:");
        html.append(color);
        html.append(";height:");
        html.append(h);
        html.append("px;width:");
        html.append(w);
        html.append("px;'></div>");
        return html.toString();
}

function getResistorHTML(x, y, rval, orientation, Ressize)
{
        if(Ressize != 0)
        {
                if (Ressize == 1)
                {
                        var bandgap = 3;
                        var bandwid = 5;
                        var leadlen = 6;
                        var bodyhgt = 6;
                        var bodywid = 18;
                }
                if(Ressize == 2)
                {
                        var bandgap = 4;
                        var bandwid = 6;
                        var leadlen = 16;
                        var bodyhgt = 7;
                        var bodywid = 19;
                }
                if(Ressize == 3)
                {
                        var bandgap = 4;
                        var bandwid = 7;
                        var leadlen = 24;
                        var bodyhgt = 8;       // total resistor "height"  =  2 * bodyhgt + 1 * leadhgt
                        var bodywid = 27;     // total resistor body length = 3* ( bandgap + bandwid) + bodywid
                }
                var leadhgt = 4;
                var bodycolor = "#8F4724";
                var leadcolor = "#777777";
                var bandcolors = getColors(rval);

                var html = new StringBuffer();
                html.append("<table cellpadding=0 cellspacing=0 width=1%>");
                if(orientation == 1)
                {
                        html.append("<tr height='");
                        html.append(bodyhgt);
                        html.append("px'>");
                        html.append("<td class='resTD'><img src='images/transparent1x1.gif' height='1px' width='1px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bodyhgt);
                        html.append("px' width='");
                        html.append(bandgap);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[0]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bodyhgt);
                        html.append("px' width='");
                        html.append(bandwid);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bodyhgt);
                        html.append("px' width='");
                        html.append(bandgap);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[1]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bodyhgt);
                        html.append("px' width='");
                        html.append(bandwid);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bodyhgt);
                        html.append("px' width='");
                        html.append(bandgap);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[2]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bodyhgt);
                        html.append("px' width='");
                        html.append(bandwid);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bodyhgt);
                        html.append("px' width='");
                        html.append(bodywid);
                        html.append("px'></td>");
                        html.append("<td class='resTD'><img src='images/transparent1x1.gif' height='1px' width='1px'></td></tr>");
// second line
                        html.append("<tr height='");
                        html.append(leadhgt);
                        html.append("px'>");
                        html.append("<td style='background-color:");
                        html.append(leadcolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(leadhgt);
                        html.append("px' width='");
                        html.append(leadlen);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(leadhgt);
                        html.append("px' width='");
                        html.append(bandgap);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[0]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(leadhgt);
                        html.append("px' width='");
                        html.append(bandwid);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(leadhgt);
                        html.append("px' width='");
                        html.append(bandgap);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[1]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(leadhgt);
                        html.append("px' width='");
                        html.append(bandwid);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(leadhgt);
                        html.append("px' width='");
                        html.append(bandgap);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[2]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(leadhgt);
                        html.append("px' width='");
                        html.append(bandwid);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(leadhgt);
                        html.append("px' width='");
                        html.append(bodywid);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(leadcolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(leadhgt);
                        html.append("px' width='");
                        html.append(leadlen);
                        html.append("px'></td></tr>");
// third line
                        html.append("<tr height='");
                        html.append(bodyhgt);
                        html.append("px'>");
                        html.append("<td class='resTD'><img src='images/transparent1x1.gif' height='1px' width='1px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bodyhgt);
                        html.append("px' width='");
                        html.append(bandgap);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[0]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bodyhgt);
                        html.append("px' width='");
                        html.append(bandwid);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bodyhgt);
                        html.append("px' width='");
                        html.append(bandgap);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[1]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bodyhgt);
                        html.append("px' width='");
                        html.append(bandwid);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bodyhgt);
                        html.append("px' width='");
                        html.append(bandgap);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[2]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bodyhgt);
                        html.append("px' width='");
                        html.append(bandwid);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bodyhgt);
                        html.append("px' width='");
                        html.append(bodywid);
                        html.append("px'></td>");
                        html.append("<td class='resTD'><img src='images/transparent1x1.gif' height='1px' width='1px'></td></tr>");
                }
                else if(orientation == 2)
                {
                        html.append("<tr height='");
                        html.append(leadlen);
                        html.append("px'>");
                        html.append("<td class='resTD'><img src='images/transparent1x1.gif' height='1px' width='1px'></td>");
                        html.append("<td style='background-color:");
                        html.append(leadcolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(leadlen);
                        html.append("px' width='");
                        html.append(leadhgt);
                        html.append("px'></td>");
                        html.append("<td class='resTD'><img src='images/transparent1x1.gif' height='1px' width='1px'></td></tr>");
// second line = bandgap
                        html.append("<tr height='");
                        html.append(bandgap);
                        html.append("px'>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bandgap);
                        html.append("px' width='");
                        html.append(bodyhgt);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bandgap);
                        html.append("px' width='");
                        html.append(leadhgt);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bandgap);
                        html.append("px' width='");
                        html.append(bodyhgt);
                        html.append("px'></td></tr>");
// third line = 1st band
                        html.append("<tr height='");
                        html.append(bandwid);
                        html.append("px'>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[0]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bandwid);
                        html.append("px' width='");
                        html.append(bodyhgt);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[0]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bandwid);
                        html.append("px' width='");
                        html.append(leadhgt);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[0]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bandwid);
                        html.append("px' width='");
                        html.append(bodyhgt);
                        html.append("px'></td></tr>");
// fourth line = bandgap
                        html.append("<tr height='");
                        html.append(bandgap);
                        html.append("px'>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bandgap);
                        html.append("px' width='");
                        html.append(bodyhgt);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bandgap);
                        html.append("px' width='");
                        html.append(leadhgt);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bandgap);
                        html.append("px' width='");
                        html.append(bodyhgt);
                        html.append("px'></td></tr>");
// fifth line = 2nd band
                        html.append("<tr height='");
                        html.append(bandwid);
                        html.append("px'>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[1]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bandwid);
                        html.append("px' width='");
                        html.append(bodyhgt);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[1]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bandwid);
                        html.append("px' width='");
                        html.append(leadhgt);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[1]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bandwid);
                        html.append("px' width='");
                        html.append(bodyhgt);
                        html.append("px'></td></tr>");
// sixth line = bandgap
                        html.append("<tr height='");
                        html.append(bandgap);
                        html.append("px'>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bandgap);
                        html.append("px' width='");
                        html.append(bodyhgt);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bandgap);
                        html.append("px' width='");
                        html.append(leadhgt);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bandgap);
                        html.append("px' width='");
                        html.append(bodyhgt);
                        html.append("px'></td></tr>");
// seventh line = 3nd band
                        html.append("<tr height='");
                        html.append(bandwid);
                        html.append("px'>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[2]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bandwid);
                        html.append("px' width='");
                        html.append(bodyhgt);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[2]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bandwid);
                        html.append("px' width='");
                        html.append(leadhgt);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[2]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bandwid);
                        html.append("px' width='");
                        html.append(bodyhgt);
                        html.append("px'></td></tr>");
// eighth line = bandgap
                        html.append("<tr height='");
                        html.append(bodywid);
                        html.append("px'>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bodywid);
                        html.append("px' width='");
                        html.append(bodyhgt);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bodywid);
                        html.append("px' width='");
                        html.append(leadhgt);
                        html.append("px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(bodywid);
                        html.append("px' width='");
                        html.append(bodyhgt);
                        html.append("px'></td></tr>");
//ninth line = lower lead
                        html.append("<tr height='");
                        html.append(leadlen);
                        html.append("px'>");
                        html.append("<td class='resTD'><img src='images/transparent1x1.gif' height='1px' width='1px'></td>");
                        html.append("<td style='background-color:");
                        html.append(leadcolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='");
                        html.append(leadlen);
                        html.append("px' width='");
                        html.append(leadhgt);
                        html.append("px'></td>");
                        html.append("<td class='resTD'><img src='images/transparent1x1.gif' height='1px' width='1px'></td></tr>");
                }
                html.append("</table>");
                return html.toString();
        }
        else  // here if Ressize = 0 for small vertically mounted
        {
                var bodycolor = "#8F4724";
                var bandcolors = getColors(rval);

                var html = new StringBuffer();
                html.append("<table cellpadding=0 cellspacing=0 width=1%>");

                if(orientation == 1)
                {
                        html.append("<tr height=3px>");
                        html.append("<td class=resTD width=1%><img src='images/resend111.gif'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[0]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='3px' width='2px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[0]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='3px' width='2px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[1]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='3px' width='2px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[1]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='3px' width='2px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[2]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='3px' width='2px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[2]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='3px' width='2px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='3px' width='2px'></td>");
                        html.append("<td class=resTD width=1%><img src='images/resend121.gif'></td></tr>");

                        html.append("<tr height=10px>");
                        html.append("<td class=resTD width=1%><img src='images/resend112.gif'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='10px' width='2px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[0]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='10px' width='2px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[0]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='10px' width='2px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[1]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='10px' width='2px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[1]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='10px' width='2px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[2]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='10px' width='2px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[2]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='10px' width='2px'></td>");
                        html.append("<td class=resTD width=1%><img src='images/resend122.gif'></td></tr>");

                        html.append("<tr height=3px>");
                        html.append("<td class=resTD width=1%><img src='images/resend113.gif'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[0]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='3px' width='2px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[0]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='3px' width='2px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[1]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='3px' width='2px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[1]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='3px' width='2px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[2]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='3px' width='2px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[2]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='3px' width='2px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='3px' width='2px'></td>");
                        html.append("<td class=resTD width=1%><img src='images/resend123.gif'></td></tr>");
                }
                else if(orientation == 2)
                {
                        html.append("<tr height=15px>");
                        html.append("<td class=resTD width=1%><img src='images/resend211.gif'></td>");
                        html.append("<td class=resTD width=1%><img src='images/resend212.gif'></td>");
                        html.append("<td class=resTD width=1%><img src='images/resend213.gif'></td></tr>");

                        html.append("<tr height=2px>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[0]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[0]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td></tr>");

                        html.append("<tr height=2px>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[0]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[0]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[0]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td></tr>");

                        html.append("<tr height=2px>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[1]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[0]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[1]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td></tr>");

                        html.append("<tr height=2px>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[1]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[1]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[1]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td></tr>");

                        html.append("<tr height=2px>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[2]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[1]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[2]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td></tr>");

                        html.append("<tr height=2px>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[2]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[2]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[2]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td></tr>");

                        html.append("<tr height=2px>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bandcolors[2]);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td>");
                        html.append("<td style='background-color:");
                        html.append(bodycolor);
                        html.append(";' class='resTD'><img src='images/transparent1x1.gif' height='2px' width='3px'></td></tr>");

                        html.append("<tr height=7px>");
                        html.append("<td class=resTD width=1%><img src='images/resend221.gif'></td>");
                        html.append("<td class=resTD width=1%><img src='images/resend222.gif'></td>");
                        html.append("<td class=resTD width=1%><img src='images/resend223.gif'></td></tr>");
                }
                html.append("</table>");
                return html.toString();
        }
}

function nToColor(n)
{
        var colors = "#000000,#CC6633,#FF0000,#FFA533,#FFFF00,#00A060,#3253FF,#A233C3,#999999,#FFFFFF".split(",");
        if(n >= 0 && n <= 9)
        {
                return colors[n];
        }
        else
        {
                return colors[0];
        }
}

function getColors(rval)
{
        var res5pct = "10,11,12,13,15,16,18,20,22,24,27,30,33,36,39,43,47,51,56,62,68,75,82,91".split(",");
        var multi = 1;
        var testVal = 0;
        var ix = 0;
        var exp = 0;
        var foundIt = false;
        var sub10 = false;

        if (rval < 10) // test for values from 1.0 to 9.9 Ohms
       {
            rval = rval * 10
            sub10 = true;
        }

        while(true)
        {
                testVal = parseInt(res5pct[ix], 10) * multi;
                if(testVal > 22000000)
                {
                        break;
                }

                if(testVal == rval)
                {
                        foundIt = true;
                        break;
                }

                ++ ix;
                if(ix == res5pct.length)
                {
                        ++ exp;
                        multi = Math.pow(10, exp);
                        ix = 0;
                }
        }
        var retcolors = new Array();
        if(foundIt)
        {
                retcolors[0] = nToColor(parseInt(res5pct[ix].charAt(0), 10));
                retcolors[1] = nToColor(parseInt(res5pct[ix].charAt(1), 10));
                retcolors[2] = nToColor(parseInt(exp, 10));
        }
        else
        {
                retcolors[0] = nToColor(0);
                retcolors[1] = nToColor(0);
                retcolors[2] = nToColor(0);
        }
        if(sub10 == true)
        {
//             retcolors[2] = "#FFD700";   // normal html gold colour for 0.1 multiplier 
               retcolors[2] = "#CFB53B";   // my gold band for 0.1 multiplier (specical case)
        }

        return retcolors;
}

function Point(x, y)
{
        this.x = x;
        this.y = y;
}

function ComponentPackage(comp, htmlObj)
{
        this.component = comp;
        this.htmlObject = htmlObj;
}



function findLandingXY(x, y)
{
        if(dropPointsX == null)
        {
                generatePointArrays();
        }
        var xPos;
        var yPos;
        var tmp = 0;
        var deltaD = 10000;
        if(x > dropPointsX[dropPointsX.length - 1])
        {
                xPos = dropPointsX[dropPointsX.length - 1];
        }
        else
        {
                for(var m = 0; m < dropPointsX.length; ++ m)
                {
                        tmp = Math.abs(dropPointsX[m] - x);
                        if(tmp < deltaD)
                        {
                                deltaD = tmp;
                        }
                        else
                        {
                                m = (m > 0) ? m - 1 : m;
                                xPos = dropPointsX[m];
                                break;
                        }
                }
                if(m == dropPointsX.length)
                {
                        xPos = dropPointsX[dropPointsX.length - 1];
                }
        }

        if(y > dropPointsY[dropPointsY.length - 1])
        {
                yPos = dropPointsY[dropPointsY.length - 1];
        }
        else
        {
                deltaD = 10000;
                for(var m = 0; m < dropPointsY.length; ++ m)
                {
                        tmp = Math.abs(dropPointsY[m] - y);
                        if(tmp < deltaD)
                        {
                                deltaD = tmp;
                        }
                        else
                        {
                                m = (m > 0) ? m - 1 : m;
                                yPos = dropPointsY[m];
                                break;
                        }
                }
                if(m == dropPointsY.length)
                {
                        yPos = dropPointsY[dropPointsY.length - 1];
                }
        }
        return new Point(xPos, yPos);
}

function generateColorChooser()
{
        var sb = new StringBuffer();
        for(var i = 0; i < wireColors.length; ++ i)
        {
                sb.append("<tr><td style='background-color:");
                sb.append(wireColors[i]);
                sb.append(";'><img id='");
                sb.append(wireColors[i]);
                sb.append("' onclick=\"setColor('");
                sb.append(wireColors[i]);
                sb.append("',this);\" ignoreclick='true' src='images/transparent1x1.gif' height='10px' width='305px'></td></tr>");
                // width was 70 increase to 250
        }
        return sb.toString();
}

function showDialog(dialog, e)
{
        if(e)
        {
                // Dynamic position
                if (mozilla)
                {
                        dialog.style.zIndex = 20;
                        dialog.style.left = pageXOffset + e.clientX + "px";
                        dialog.style.top = pageYOffset + e.clientY + "px";
                        dialog.style.visibility = "visible";
                        e.preventDefault();
                        globalDialogVisible = true;
                }
                else if (ie)
                {
                        dialog.style.zIndex = 20;
                        dialog.style.left = iebody().scrollLeft + event.clientX
                        dialog.style.top = iebody().scrollTop + event.clientY
                        dialog.style.visibility = "visible"
                        globalDialogVisible = true;
                }
        }
        else
        {
                // Style contains position.
                if (mozilla)
                {
                        dialog.style.zIndex = 20;
                        dialog.style.visibility = "visible";
                        globalDialogVisible = true;
                }
                else if (ie)
                {
                        dialog.style.zIndex = 20;
                        dialog.style.visibility = "visible";
                        globalDialogVisible = true;
                }
        }
}

function setRadioValue(elname, val)
{
        var tmp = document.dialogwindowsForm.elements[elname];
        if(tmp && tmp.length)
        {
                for(var i = 0; i < tmp.length; ++ i)
                {
                        if(tmp[i].value == val)
                        {
                                tmp[i].checked = true;
                        }
                        else
                        {
                                tmp[i].checked = false;
                        }
                }
        }
}

function findRadioValue(elname)
{
        var tmp = document.dialogwindowsForm.elements[elname];
        if(tmp && tmp.length)
        {
                for(var i = 0; i < tmp.length; ++ i)
                {
                        if(tmp[i].checked)
                        {
                                return tmp[i].value
                        }
                }
        }
        return null;
}

function findInnerDiv(elem)
{
        var theChildren = getElementChildren(elem);
        for(var m = 0; m < theChildren.length; ++ m)
        {
                if(theChildren[m].nodeName && theChildren[m].nodeName.toUpperCase() == "DIV")
                {
                        return theChildren[m];
                }
        }
        return null;
}

function clearColorBorders()
{
        for(var i = 0; i < wireColors.length; ++ i)
        {
                document.getElementById(wireColors[i]).style.border = "none";
        }
}

function setColor(val, imgRef)
{
        clearColorBorders();
        document.dialogwindowsForm.wirecolor.value = val;
        imgRef.style.border = "dashed 1px black";

}

function deleteSelected()
{
        if(globalComponent)
        {
                globalBreadBoard.removeComponent(globalComponent.id);
                var parentNode = getElementParent(globalComponent);
                parentNode.removeChild(globalComponent);
        }
        globalComponent = null;
        hideAllDialogs();
}

function copySelected()
{
        if(globalComponent)
        {
                var componentRef = globalBreadBoard.find(globalComponent.id);
                var newObject = createNewComponent(globalComponent, new Point(40, - 40));
                if(newObject)
                {
                        var componentRef2 = globalBreadBoard.find(newObject.id);
                        if(componentRef2)
                        {
                                componentRef2.imgname = componentRef.imgname;
                                componentRef2.compType = componentRef.compType;
                                componentRef2.compValue = componentRef.compValue;
                                componentRef2.orientation = componentRef.orientation;
                                componentRef2.partnumber = componentRef.partnumber;
                                componentRef2.designator = componentRef.designator;
                                componentRef2.color = componentRef.color;
                                componentRef2.compSize = componentRef.compSize;
                                componentRef2.package = componentRef.package;
                                componentRef2.text = componentRef.text;
                                componentRef2.pins = componentRef.pins;
                        }
                }
        }
        globalComponent = null;
        hideAllDialogs();
}

function clearBreadBoard(bShowMsg)
{
        if(bShowMsg && ! confirm("Clear All Components?"))
        {
                return;
        }
        var compList = globalBreadBoard.getComponentList();
        if(compList)
        {
                for(var i = 0; i < compList.length; ++ i)
                {
                        var comp = document.getElementById(compList[i].id);
                        if(comp)
                        {
                                var parentNode = getElementParent(comp);
                                parentNode.removeChild(comp);
                        }
                }
        }
        globalBreadBoard.ClearAll();
}


function findObjectPrototype(pname)
{
        var partbin = document.getElementById("componentPrototypes");
        var parts = getElementChildren(partbin);
        for(var i = 0; i < parts.length; ++ i)
        {
                if(parts[i].nodeName == "DIV")
                {
                        if(getElementAttribute(parts[i], "objectprototype") == pname)
                        {
                                return parts[i];
                        }
                }
        }
}


function createComponent(componentRef)
{
        var proto = findObjectPrototype(componentRef.compType);
        var myParent = getElementParent(proto);
        var newCompView = document.createElement("DIV");
        newCompView.className = compStyle[componentRef.compType];
        newCompView.innerHTML = proto.innerHTML;
        newCompView.style.zIndex = "10";
        setElementAttribute(newCompView, "parttype", componentRef.compType);
        applyComponentValuesToView(componentRef, newCompView);
        globalBreadBoard.add(componentRef);
        newCompView.id = componentRef.id;
// deleted the line below as this identifies with the parent which is part of the "menu" Div
//       myParent.appendChild(newCompView, null);
// Use the new line below to locate relative to the breadboard and off-board areas instead of the menu	
	ComponentlayerDiv.appendChild(newCompView, null);

        Drag.init(newCompView);
}



function getImageNameWithoutExtension(imgName)
{
        var m = imgName.indexOf(".");
        return imgName.substring(0, m);
}


function getImageNameExtension(imgName)
{
        var m = imgName.indexOf(".");
        return imgName.substring(m + 1);
}


function createNewComponent(proto, offset)
{
        var parttype   = getElementAttribute(proto, "parttype");
        var initorient = getElementAttribute(proto, "initorient");
        var initcolor  = getElementAttribute(proto, "initcolor");
        var initsize   = getElementAttribute(proto, "initsize");

//
// at this point in the program, we -DO- want the parent Div which is defined
// in the html file with: the <div id="componentPrototypes"
// so that we can get the attributes for the new component from the parent component
        var myParent = getElementParent(proto);

        var newObject = document.createElement("DIV");
        newObject.style.zIndex = "10";
        var tmp = parseInt(proto.style.top) + offset.y;
        newObject.style.top = tmp + "px";
        tmp = parseInt(proto.style.left) + offset.x;
        newObject.style.left = tmp + "px";
        newObject.style.height = proto.style.height;
        newObject.style.width = proto.style.width;
        newObject.innerHTML = proto.innerHTML;
        setElementAttribute(newObject, "parttype", parttype);
        var xp = parseInt(newObject.style.left);
        var yp = parseInt(newObject.style.top);
        var cmp = null;

        /*
        1  compType,
        2  compValue,
        3  xPos,
        4  yPos,
        5  orientation,
        6  partnumber,
        7  designator,
        8  color,
        9  compSize,
        10 package,
        11 text,
        12 pins,
        13 imgname
        14 id (assigned in object)
        */

        switch(parttype)
        {
                case "Capacitor" :
                        newObject.className = "capacitorOuterDiv";
                        cmp = new
                        BBComponent(parttype, "", xp, yp, "1", "Capacitor", "C?", "", "1", "1", "", "", initCompImg["Capacitor"]);
                        break;
                case "Wire" :
                        newObject.className = "wireDiv";
                        cmp = new
                        BBComponent(parttype, "", xp, yp, "", "", "11", "", "4", "11", "", "10", initCompImg["Wire"]);
                        break;
                case "Note" :
                        newObject.className = "noteOuterDiv";
                        cmp = new
                        BBComponent(parttype, "", xp, yp, "1", "", "", "", "1", "", "Note", "", initCompImg["Note"]);
                        break;
                case "IC" :
                        newObject.className = "dipPackageOuterDiv";
                        cmp = new
                        BBComponent(parttype, "", xp, yp, "1", "", "U?", "", "", "DIP8", "IC", "", initCompImg["IC"]);
                        break;
                case "LED" :
                        newObject.className = "discretePackageOuterDiv";
                        cmp = new
                        BBComponent(parttype, "0", xp, yp, "1", "LED", "LED?", "1", "", "", "IC", "", initCompImg["LED"]);
                        break;
                case "Diode" :
                        newObject.className = "diodeOuterDiv";
                        cmp = new
                        BBComponent(parttype, "0", xp, yp, "1", "Diode", "CR?", "", "2", "1", "IC", "", initCompImg["Diode"]);
                        break;
                case "Resistor" :
                        newObject.className = "resistorDiv";
                        cmp = new
                        BBComponent(parttype, "1000", xp, yp, "1", "Resistor", "R?", "", "3", "", "IC", "", initCompImg["Resistor"]);
                        break;
                case "Transistor" :
                        newObject.className = "transistorOuterDiv";
                        cmp = new
                        BBComponent(parttype, "BC559", xp, yp, "1", "Transistor", "Q?", "", "", "1", "IC", "", initCompImg["Transistor"]);
                        break;
                case "Switch" :
                        newObject.className = "switchOuterDiv";
                        cmp = new
                        BBComponent(parttype, "", xp, yp, "1", "", "SW?", "1", "", "1", "Switch", "", initCompImg["Switch"]);
                        break;
                case "Terminal" :
                        newObject.className = "terminalOuterDiv";
                        cmp = new
                        BBComponent(parttype, "", xp, yp, "1", "", "TS?", "", "3", "4", "Terminals", "", initCompImg["Terminal"]);
                        break;
                case "DIPSw" :
                        newObject.className = "dipswOuterDiv";
                        cmp = new
                        BBComponent(parttype, "", xp, yp, "1", "", "SW?", "", "2", "", "DIPSw", "", initCompImg["DIPSw"]);
                        break;
                case "Miscell" :
                        newObject.className = "miscellOuterDiv";
                        cmp = new
                        BBComponent(parttype, "", xp, yp, "1", "", "XX?", "", "1", "1", "Miscell", "", initCompImg["Miscell"]);
                        break;
                case "FourD" :
                        newObject.className = "fourDOuterDiv";
                        cmp = new
                        BBComponent(parttype, "", xp, yp, "1", "", "XX?", "", "1", "1", "FourD", "", initCompImg["FourD"]);
                        break;
// New Aug 2016
                case "ProtoBrd" :
                        newObject.className = "ProtoBrdOuterDiv";
                        cmp = new
                        BBComponent(parttype, "", xp, yp, "1", "", "XX?", "", "1", "1", " ", "", initCompImg["ProtoBrd"]);
                        break;
// New Sept 2016
                case "Wlinks" :
                        newObject.className = "WlinksOuterDiv";
                        cmp = new
                        BBComponent(parttype, "", xp, yp, "15", "", "XX?", "", "1", "1", " ", "", initCompImg["Wlinks"]);
                        break;
                case "Slider" :
                        newObject.className = "sliderOuterDiv";
                        cmp = new
			BBComponent(parttype, "", xp, yp, "1", "", "XX?", "", "1", "1", " ", "", initCompImg["Slider"]);  
 			applyDialogValues();
//			applyComponentValuesToView(componentRef, globalComponent);
			break;
        }



       /*
        1  compType,
        2  compValue,
        3  xPos,
        4  yPos,
        5  orientation,
        6  partnumber,
        7  designator,
        8  color,
        9  compSize,
        10 package,
        11 text,
        12 pins,
        13 imgname
        14 id (assigned in object)
        */



        if(cmp)
        {
                cmp.orientation = "1";
                if(initorient)
                {
                        cmp.orientation = initorient;
                }
                if(initcolor)
                {
                        cmp.color = initcolor;
                }
                if(initsize)
                {
                        cmp.compSize = initsize;
                }

                globalBreadBoard.add(cmp);
                newObject.id = cmp.id;

// deleted the line below as this identifies with the parent which is part of the "menu" Div
//                myParent.appendChild(newObject, null);
// Use the new line below to locate relative to the breadboard and off-board areas instead of the menu	
		ComponentlayerDiv.appendChild(newObject, null);

                Drag.init(newObject);

                return newObject;
        }
        else
        {
                return null;
        }
}

// -------------------------------------------------------------------
// Apply the properties of the componentRef to the componentDIV
// which contains the visual representation of the component.
// -------------------------------------------------------------------
function applyComponentValuesToView(componentRef, componentDIV)
{
        componentDIV.style.left = componentRef.x + "px";
        componentDIV.style.top = componentRef.y + "px";
        switch(componentRef.compType)
        {
                case "Note" :
                var imgObj = eval(componentRef.imgname);
                componentDIV.style.width = imgObj.width + "px";
                componentDIV.style.height = imgObj.height + "px";
                var innerDIV = findInnerDiv(componentDIV);
                if(innerDIV)
                {
                        innerDIV.style.width = imgObj.width + "px";
                        innerDIV.style.height = imgObj.height + "px";
                        innerDIV.style.backgroundImage = "url(" + imgObj.src + ")";
                        innerDIV.innerHTML = componentRef.text;
                    if(componentRef.compSize == 2)
                    {
                        if (componentRef.orientation == 1)
                        {
                            innerDIV.innerHTML = "<span style='position:absolute;top:1px;left:4px;font-size:9pt;'>" + componentRef.text +"</span>";
                        }
		    else
                        {
                            innerDIV.innerHTML = "<span style='position:absolute;top:1px;left:1px;padding-right:4px;font-size:9pt;'>" + componentRef.text +"</span>";
                        }
		    }
                    if(componentRef.compSize == 3)
                    {
                        if (componentRef.orientation == 1)
                        {
                            innerDIV.innerHTML = "<span style='position:absolute;top:1px;left:2px;font-size:8pt;'>" + componentRef.text +"</span>";
                        }
                        else
                        {
                            innerDIV.innerHTML = "<span style='position:absolute;top:1px;left:0px;font-size:8pt;'>" + componentRef.text +"</span>";
                        }
		    }
                    if(componentRef.compSize == 4)
                    {
                            innerDIV.innerHTML = "<span style='position:absolute;top:1px;left:2px;font-size:9pt;'>" + componentRef.text +"</span>";
		    }
		}
                break;


                case "IC" :
                var imgObj = eval(componentRef.imgname);
                componentDIV.style.width = imgObj.width + "px";
                componentDIV.style.height = imgObj.height + "px";
                var innerDIV = findInnerDiv(componentDIV);
                if(innerDIV)
                {
                        innerDIV.style.width = imgObj.width + "px";
                        innerDIV.style.height = imgObj.height + "px";
                        innerDIV.style.backgroundImage = "url(" + imgObj.src + ")";
                        innerDIV.innerHTML = "<span style='position:absolute;top:32px;color:white;'>" + componentRef.partnumber + "</span>";
		if(componentRef.package == "AXE200")
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:70px;left:90px;color:white;'>" + componentRef.partnumber + "</span>";
                                }
		if(componentRef.package == "LVC74245")
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:75px;left:110px;color:white;'>" + componentRef.partnumber + "</span>";
                                }
                }
                break;


                case "LED" :
                var imgObj = eval(componentRef.imgname);
                componentDIV.style.width = imgObj.width + "px";
                componentDIV.style.height = imgObj.height + "px";
                var innerDIV = findInnerDiv(componentDIV);
                if(innerDIV)
                {
                        innerDIV.style.width = imgObj.width + "px";
                        innerDIV.style.height = imgObj.height + "px";
                        innerDIV.style.backgroundImage = "url(" + imgObj.src + ")";
                }
                break;

                case "Diode" :
                var imgObj = eval(componentRef.imgname);
                componentDIV.style.width = imgObj.width + "px";
                componentDIV.style.height = imgObj.height + "px";
                var innerDIV = findInnerDiv(componentDIV);
                if(innerDIV)
                {
                        innerDIV.style.width = imgObj.width + "px";
                        innerDIV.style.height = imgObj.height + "px";
                        innerDIV.style.backgroundImage = "url(" + imgObj.src + ")";


                        switch("" + componentRef.orientation)
                        {
                                case "1" :
                                if(componentRef.compSize == 0)
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:-12px;left:0px;color:black;'>" + componentRef.partnumber + "</span>";
                                }
                                if(componentRef.compSize == 1)
                                {
                                        if(componentRef.package == 1)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:3px;left:16px;'>" + componentRef.partnumber + "</span>";
                                        }
                                        else
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:3px;left:16px;color:white;'>" + componentRef.partnumber + "</span>";
                                        }
                                }
                                if(componentRef.compSize == 2)
                                {
                                        if(componentRef.package == 1)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:3px;left:29px;'>" + componentRef.partnumber + "</span>";
                                        }
                                        else
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:3px;left:29px;color:white;'>" + componentRef.partnumber + "</span>";
                                        }
                                }
                                if(componentRef.compSize == 3)
                                {
                                        if(componentRef.package == 1)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:3px;left:45px;'>" + componentRef.partnumber + "</span>";
                                        }
                                        else
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:3px;left:45px;color:white;'>" + componentRef.partnumber + "</span>";
                                        }
                                }
                                break

                                case "2" :
                                case "4" :
                                if(componentRef.compSize == 0)
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:-12px;left:-6px;color:black;'>" + componentRef.partnumber + "</span>";
                                }
                                if(componentRef.compSize == 1)
                                {
                                        if(componentRef.package == 1)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:23px;left:-10px;'>" + componentRef.partnumber + "</span>";
                                        }
                                        else
                                        {
                                                // here we are using a darker shade of cyan colour for the vertical black body diodes so text is better visible against diode and either white or blue breadboards
                                                innerDIV.innerHTML = "<span style='position:absolute;top:23px;left:-10px;color:#007777;'>" + componentRef.partnumber + "</span>";
                                        }
                                }
                                if(componentRef.compSize == 2)
                                {
                                        if(componentRef.package == 1)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:30px;left:-10px;'>" + componentRef.partnumber + "</span>";
                                        }
                                        else
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:30px;left:-10px;color:#007777;'>" + componentRef.partnumber + "</span>";
                                        }
                                }
                                if(componentRef.compSize == 3)
                                {
                                        if(componentRef.package == 1)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:40px;left:-10px;'>" + componentRef.partnumber + "</span>";
                                        }
                                        else
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:40px;left:-10px;color:#007777;'>" + componentRef.partnumber + "</span>";
                                        }
                                }
                                break

                                case "3" :
                                if(componentRef.compSize == 0)
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:-12px;left:0px;color:black;'>" + componentRef.partnumber + "</span>";
                                }
                                if(componentRef.compSize == 1)
                                {
                                        if(componentRef.package == 1)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:3px;left:0px;'>" + componentRef.partnumber + "</span>";
                                        }
                                        else
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:3px;left:0px;color:white;'>" + componentRef.partnumber + "</span>";
                                        }
                                }
                                if(componentRef.compSize == 2)
                                {
                                        if(componentRef.package == 1)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:3px;left:17px;'>" + componentRef.partnumber + "</span>";
                                        }
                                        else
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:3px;left:17px;color:white;'>" + componentRef.partnumber + "</span>";
                                        }
                                }
                                if(componentRef.compSize == 3)
                                {
                                        if(componentRef.package == 1)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:3px;left:28px;'>" + componentRef.partnumber + "</span>";
                                        }
                                        else
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:3px;left:28px;color:white;'>" + componentRef.partnumber + "</span>";
                                        }
                                }
                                break
                        }
                }
                break;


                case "Capacitor" :
                var imgObj = eval(componentRef.imgname);
                componentDIV.style.width = imgObj.width + "px";
                componentDIV.style.height = imgObj.height + "px";
                var innerDIV = findInnerDiv(componentDIV);
                if(innerDIV)
                {
                        innerDIV.style.width = imgObj.width + "px";
                        innerDIV.style.height = imgObj.height + "px";
                        innerDIV.style.backgroundImage = "url(" + imgObj.src + ")";

                        switch("" + componentRef.orientation)
                        {
                                case "1" :
                                if(componentRef.package == 2) // axial electro caps
                                {
                                        if(componentRef.compSize == 1)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:10px;left:18px;'>" + componentRef.compValue + "</span>";
                                        }
                                        if(componentRef.compSize == 2)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:10px;left:30px;'>" + componentRef.compValue + "</span>";
                                        }
                                        if(componentRef.compSize == 3)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:10px;left:40px;'>" + componentRef.compValue + "</span>";
                                        }
                                }

                                else       //  for greencaps, radial electro or tantalum caps
                                {
                                        innerDIV.innerHTML = componentRef.compValue;
                                }
                                break

                                case "2" :
                                case "4" :
                                if(componentRef.package == 1)  // greencaps
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:23px;left:0px;'>" + componentRef.compValue + "</span>";
                                }
                                else if(componentRef.package == 2)  // axial electros
                                {
                                        if(componentRef.compSize == 1)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:20px;left:2px;'>" + componentRef.compValue + "</span>";
                                        }
                                        if(componentRef.compSize == 2)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:35px;left:3px;'>" + componentRef.compValue + "</span>";
                                        }
                                        if(componentRef.compSize == 3)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:45px;left:4px;'>" + componentRef.compValue + "</span>";
                                        }
                                }
                                else if(componentRef.package == 4)  // tantalum caps
                                {
                                        if(componentRef.compSize == 1)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:10px;left:-2px;'>" + componentRef.compValue + "</span>";
                                        }
                                        if(componentRef.compSize == 2)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:20px;left:0px;'>" + componentRef.compValue + "</span>";
                                        }
                                        if(componentRef.compSize == 3)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:35px;left:0px;'>" + componentRef.compValue + "</span>";
                                        }
                                }
                                else       //  for radial electro or tantalum caps
                                {
                                        innerDIV.innerHTML = componentRef.compValue;
                                }
                                break

                                case "3" :
                                if(componentRef.package == 2) // axial electro caps
                                {
                                        if(componentRef.compSize == 1)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:7px;left:10px;'>" + componentRef.compValue + "</span>";
                                        }
                                        if(componentRef.compSize == 2)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:10px;left:15px;'>" + componentRef.compValue + "</span>";
                                        }
                                        if(componentRef.compSize == 3)
                                        {
                                                innerDIV.innerHTML = "<span style='position:absolute;top:10px;left:30px;'>" + componentRef.compValue + "</span>";
                                        }
                                }
                                else       //  for greencaps, radial electro or tantalum caps
                                {
                                        innerDIV.innerHTML = componentRef.compValue;
                                }
                                break
                        }
                }
                break;


                case "Transistor" :
                var imgObj = eval(componentRef.imgname);
                componentDIV.style.width = imgObj.width + "px";
                componentDIV.style.height = imgObj.height + "px";
                var innerDIV = findInnerDiv(componentDIV);
                if(innerDIV)
                {
                        innerDIV.style.width = imgObj.width + "px";
                        innerDIV.style.height = imgObj.height + "px";
                        innerDIV.style.backgroundImage = "url(" + imgObj.src + ")";
                        if(componentRef.orientation <= 2)
                        {
                                innerDIV.innerHTML = componentRef.pins;
                        }
                        if(componentRef.orientation == 3)
                        {
                                if (componentRef.package == 1)
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:35px;left:2px;'>" + componentRef.pins + "</span>";
                                }
                                else
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:35px;left:8px;'>" + componentRef.pins + "</span>";
                                }
                        }
                        if(componentRef.orientation == 4)
                        {
                                if (componentRef.package == 1)
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:30px;left:16px;'>" + componentRef.pins + "</span>";
                                }
                                else
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:30px;left:18px;'>" + componentRef.pins + "</span>";
                                }
                        }
                        if(componentRef.orientation == 5)
                        {
                               innerDIV.innerHTML = "<span style='position:absolute;top:22px;left:2px;'>" + componentRef.pins + "</span>";
                        }
                        if(componentRef.orientation == 6)
                        {
                              innerDIV.innerHTML = "<span style='position:absolute;top:22px;left:5px;'>" + componentRef.pins + "</span>";
                        }
                }
                break;

                case "Terminal" :
                var imgObj = eval(componentRef.imgname);
                componentDIV.style.width = imgObj.width + "px";
                componentDIV.style.height = imgObj.height + "px";
                var innerDIV = findInnerDiv(componentDIV);
                if(innerDIV)
                {
                        innerDIV.style.width = imgObj.width + "px";
                        innerDIV.style.height = imgObj.height + "px";
                        innerDIV.style.backgroundImage = "url(" + imgObj.src + ")";
                        if(componentRef.package == 6)
                        {
                                if(componentRef.orientation == 1)
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:30px;left:15px;color:white;'>" + componentRef.text + "</span>";
                                }
                                else
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:148px;left:15px;color:white;'>" + componentRef.text + "</span>";

                                }
                        }
                        else
                        {
                                innerDIV.innerHTML = "<span style='position:absolute;top:-14px;left:1px;color:black;'>" + componentRef.text + "</span>";
                        }
                }
                break;

                case "DIPSw" :
                var imgObj = eval(componentRef.imgname);
                componentDIV.style.width = imgObj.width + "px";
                componentDIV.style.height = imgObj.height + "px";
                var innerDIV = findInnerDiv(componentDIV);
                if(innerDIV)
                {
                        innerDIV.style.width = imgObj.width + "px";
                        innerDIV.style.height = imgObj.height + "px";
                        innerDIV.style.backgroundImage = "url(" + imgObj.src + ")";
			if(componentRef.compSize != 10 & componentRef.compSize != 11)
                                {
                                        innerDIV.innerHTML = componentRef.text;
                                }
			if(componentRef.compSize == 10)
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:9px;left:15px;color:black;'>" + componentRef.text + "</span>";
                                }
			if(componentRef.compSize == 11)
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:15px;left:18px;color:black;'>" + componentRef.text + "</span>";
                                }
                }
                break;


                case "Miscell" :
                var imgObj = eval(componentRef.imgname);
                componentDIV.style.width = imgObj.width + "px";
                componentDIV.style.height = imgObj.height + "px";
                var innerDIV = findInnerDiv(componentDIV);
                if(innerDIV)
                {
                        innerDIV.style.width = imgObj.width + "px";
                        innerDIV.style.height = imgObj.height + "px";
                        innerDIV.style.backgroundImage = "url(" + imgObj.src + ")";

                        switch("" + componentRef.package)
                        {
                                case "1" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:10px;left:15px;font-weight:bold;'>" + componentRef.text + "</span>";
                                break;
                                case "2" :
                                case "3" :
                                case "16" :
                                case "17" :
                                case "26" :
                                case "32" :
                                case "33" :
                                case "34" :
				case "35" :
				case "36" :
                                case "42" :
                                case "43" :
                                innerDIV.innerHTML = componentRef.text;
                                break;
                                case "4" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:-10px;left:0px;'>" + componentRef.text + "</span>";
                                break;
                                case "5" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:10px;left:10px;'>" + componentRef.text + "</span>";
                                break;
                                case "6" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:50px;left:45px;color:white;'>" + componentRef.text + "</span>";
                                break;
                                case "7" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:60px;left:65px;color:white;'>" + componentRef.text + "</span>";
                                break;
                                case "8" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:60px;left:50px;color:white;'>" + componentRef.text + "</span>";
                                break;
                                case "9" :
                                case "10" :
                                case "11" :
                                case "12" :
                                case "13" :
                                case "14" :
                                case "15" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:-3px;'>" + componentRef.text + "</span>";
                                break;
                                case "18" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:45px;left:110px;'>" + componentRef.text + "</span>";
                                break;
                                case "19" :
                                case "20" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:70px;left:60px;'>" + componentRef.text + "</span>";
                                break;
                                case "21" :
                                case "22" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:130px;left:45px;color:white;'>" + componentRef.text + "</span>";
                                break;
                                case "23" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:100px;left:45px;color:white;'>" + componentRef.text + "</span>";
                                break;
                                case "24" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:80px;left:50px;'>" + componentRef.text + "</span>";
                                break;
                                case "25" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:15px;left:18px;'>" + componentRef.text + "</span>";
                                break;
                                case "27" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:45px;left:48px;color:red;'>" + componentRef.text + "</span>";
                                break;
                                case "28" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:45px;left:48px;color:red;'>" + componentRef.text + "</span>";
                                break;
                                case "29" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:25px;left:10px;color:white;'>" + componentRef.text + "</span>";
                                break;
                                case "30" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:42px;left:30px;color:white;'>" + componentRef.text + "</span>";
                                break;
                                case "31" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:45px;left:150px;'>" + componentRef.text + "</span>";
                                break;
                                case "37" :
                                case "38" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:43px;left:205px;color:black;font-weight:bold;'>" + componentRef.text + "</span>";
                                break;
                                case "39" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:70px;left:200px;color:white;font-weight:bold;'>" + componentRef.text + "</span>";
                                break;
                                case "40" :
                                case "41" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:70px;left:100px;color:white;font-weight:bold;'>" + componentRef.text + "</span>";
                                break;
                     }
                }
                break;


// New Aug 2016
                case "ProtoBrd" :
                var imgObj = eval(componentRef.imgname);
                componentDIV.style.width = imgObj.width + "px";
                componentDIV.style.height = imgObj.height + "px";
                var innerDIV = findInnerDiv(componentDIV);
                if(innerDIV)
                {
                        innerDIV.style.width = imgObj.width + "px";
                        innerDIV.style.height = imgObj.height + "px";
                        innerDIV.style.backgroundImage = "url(" + imgObj.src + ")";
			innerDIV.innerHTML = "<span style='position:absolute;top:10px;left:10px;'>" + componentRef.text + "</span>";    
                }
                break;

// New Sept 2016
                case "Wlinks" :
                var imgObj = eval(componentRef.imgname);
                componentDIV.style.width = imgObj.width + "px";
                componentDIV.style.height = imgObj.height + "px";
                var innerDIV = findInnerDiv(componentDIV);
                if(innerDIV)
		{                
        		innerDIV.style.width = imgObj.width + "px";
                        innerDIV.style.height = imgObj.height + "px";
                        innerDIV.style.backgroundImage = "url(" + imgObj.src + ")";
			innerDIV.innerHTML = "<span style='position:absolute;top:10px;left:10px;'>" + componentRef.text + "</span>";    
                }
                break;

// New Sept 2016
                case "Slider" :
                var imgObj = eval(componentRef.imgname);
                componentDIV.style.width = imgObj.width + "px";
                componentDIV.style.height = imgObj.height + "px";
                var innerDIV = findInnerDiv(componentDIV);
                if(innerDIV)
                {
                        innerDIV.style.width = imgObj.width + "px";
                        innerDIV.style.height = imgObj.height + "px";
                        innerDIV.style.backgroundImage = "url(" + imgObj.src + ")";
                        innerDIV.innerHTML = componentRef.text;
                       innerDIV.innerHTML = "<span style='position:absolute;top:1px;left:4px;font-size:9pt;'>" + componentRef.text +"</span>";
		}
                break;


                case "FourD" :
                var imgObj = eval(componentRef.imgname);
                componentDIV.style.width = imgObj.width + "px";
                componentDIV.style.height = imgObj.height + "px";
                var innerDIV = findInnerDiv(componentDIV);
                if(innerDIV)
                {
                        innerDIV.style.width = imgObj.width + "px";
                        innerDIV.style.height = imgObj.height + "px";
                        innerDIV.style.backgroundImage = "url(" + imgObj.src + ")";

                        switch("" + componentRef.package)
                        {
                                case "1" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:25px;left:70px;color:white; font-weight:bold;'>" + componentRef.text + "</span>";
                                break;
                                case "2" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:55px;left:70px;color:white; font-weight:bold;'>" + componentRef.text + "</span>";
                                break;
                                case "3" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:25px;left:85px;color:white; font-weight:bold;'>" + componentRef.text + "</span>";
                                break;
                                case "4" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:55px;left:85px;color:white; font-weight:bold;'>" + componentRef.text + "</span>";
                                break;
                                case "5" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:25px;left:105px;color:white; font-weight:bold;'>" + componentRef.text + "</span>";
                                break;
                                case "6" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:55px;left:105px;color:white; font-weight:bold;'>" + componentRef.text + "</span>";
                                break;
                                case "7" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:370px;left:35px;color:white; font-weight:bold;'>" + componentRef.text + "</span>";
                                break;
                                case "8" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:35px;left:350px;color:white; font-weight:bold;'>" + componentRef.text + "</span>";
                                break;
                                case "9" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:65px;left:55px;color:black; font-weight:bold;'>" + componentRef.text + "</span>";
                                break;
                                case "10" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:48px;left:183px;color:white; font-weight:bold;'>" + componentRef.text + "</span>";
                                break;
                                case "11" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:45px;left:12px;color:white; font-weight:bold;'>" + componentRef.text + "</span>";
                                break;
                                case "12" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:65px;left:55px;color:black; font-weight:bold;'>" + componentRef.text + "</span>";
                                break;
                                case "13" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:80px;left:50px;color:white; font-weight:bold;'>" + componentRef.text + "</span>";
                                break;
                                case "14" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:360px;left:10px;color:white; font-weight:bold;'>" + componentRef.text + "</span>";
                                break;
                                case "15" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:360px;left:343px;color:white; font-weight:bold;'>" + componentRef.text + "</span>";
                                break;
                                case "16" :
                                innerDIV.innerHTML = "<span style='position:absolute;top:60px;left:25px;color:black; font-weight:bold;'>" + componentRef.text + "</span>";
                                break;
                        }
                }
                break;


                case "Resistor" :
                var newval = componentRef.compValue;
                var ressize = componentRef.compSize;
                var orient = componentRef.orientation;
	 switch("" + ressize)
                {

		case "0":
                		componentDIV.style.width = (orient == 1) ? "36px" : "16px";
                		componentDIV.style.height = (orient == 1) ? "16px" : "36px";
			break;
		case "1":
                		componentDIV.style.width = (orient == 1) ? "54px" : "16px";
                		componentDIV.style.height = (orient == 1) ? "16px" : "54px";
			break;
		case "2":
                		componentDIV.style.width = (orient == 1) ? "81px" : "18px";
                		componentDIV.style.height = (orient == 1) ? "18px" : "81px";
			break;
		case "3":
                		componentDIV.style.width = (orient == 1) ? "108px" : "20px";
                		componentDIV.style.height = (orient == 1) ? "20px" : "108px";
			break;
	}	
                componentDIV.innerHTML = getResistorHTML(0, 0, newval, orient, ressize);
                break;

                case "Wire" :
                var newval = componentRef.compSize;
                var decomp1 = componentRef.orientation;
                var decomp2 = componentRef.package;
                var decomp3 = componentRef.designator;
                var worient = decomp1 / 10;
                var worient = parseInt( worient);
                var woff = decomp1 - (worient * 10);
                var wend1 = decomp2 / 10;
                var wend1 = parseInt( wend1);
                var wend2 = decomp2 - (wend1 * 10);
                var woff1 = decomp3 / 10;
                var woff1 = parseInt( woff1);
                var woff2 = decomp3 - (woff1 * 10);
                var color = componentRef.color;

		componentDIV.style.zIndex = parseInt(componentRef.pins);

                componentDIV.innerHTML = getWireHTML(worient, woff, wend1, wend2, woff1, woff2, newval, color, componentDIV);
                break;

                case "Switch" :
                var imgObj = eval(componentRef.imgname);
                componentDIV.style.width = imgObj.width + "px";
                componentDIV.style.height = imgObj.height + "px";
                var innerDIV = findInnerDiv(componentDIV);
                if(innerDIV)
                {
                        innerDIV.style.width = imgObj.width + "px";
                        innerDIV.style.height = imgObj.height + "px";
                        innerDIV.style.backgroundImage = "url(" + imgObj.src + ")";
                        innerDIV.innerHTML = componentRef.partnumber;

                        switch("" + componentRef.orientation)
                        {
                                case "1" :
                                if(componentRef.package == 1)
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:18px;left:40px;'>" + componentRef.text + "</span>";
                                }
                                if(componentRef.package == 2)
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:30px;left:73px;'>" + componentRef.text + "</span>";
                                }
                                if(componentRef.package == 3)
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:30px;left:73px;'>" + componentRef.text + "</span>";
                                }
                                break;

                                case "3" :
                                if(componentRef.package == 1)
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:18px;left:55px;'>" + componentRef.text + "</span>";
                                }
                                if(componentRef.package == 2)
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:30px;left:70px;'>" + componentRef.text + "</span>";
                                }
                                if(componentRef.package == 3)
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:30px;left:97px;'>" + componentRef.text + "</span>";
                                }
                                break;

                                case "2" :
                                if(componentRef.package == 1)
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:45px;left:5px;'>" + componentRef.text + "</span>";
                                }
                                if(componentRef.package == 2)
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:90px;left:10px;'>" + componentRef.text + "</span>";
                                }
                                if(componentRef.package == 3)
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:90px;left:10px;'>" + componentRef.text + "</span>";
                                }
                                break;

                                case "4" :
                                if(componentRef.package == 1)
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:65px;left:5px;'>" + componentRef.text + "</span>";
                                }
                                if(componentRef.package == 2)
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:45px;left:10px;'>" + componentRef.text + "</span>";
                                }
                                if(componentRef.package == 3)
                                {
                                        innerDIV.innerHTML = "<span style='position:absolute;top:45px;left:10px;'>" + componentRef.text + "</span>";
                                }
                                break;
                        }
                }
                break;
        }
}


function ignoreElementClick(elem)
{
        if(getElementAttribute(elem, "ignoreclick"))
        {
                return true;
        }
        var sNodeParent = getElementParent(elem);
        var holdParent;
        while(sNodeParent)
        {
                if(getElementAttribute(sNodeParent, "ignoreclick"))
                {
                        return true;
                }
                else
                {
                        if(sNodeParent == holdParent)
                        {
                                return false;
                        }
                }
                holdParent = sNodeParent;
                sNodeParent = getElementParent(sNodeParent);
        }
        return false;
}


function hidemenu(e)
{
        e = getEvent(e);
        var target = getEventSource(e);
        var ignoreThis = ignoreElementClick(target);
        var nName = target.nodeName;

        if(ignoreThis || nName == "OPTION" || nName == "SELECT" || nName == "RADIO" || nName == "INPUT" || nName=="BUTTON")
        {
                return;
        }

        if (globalDialogVisible)
        {
                hideAllDialogs();
        }
}


function _(s) {
if (typeof(localise)!='undefined' && localise[s]) {
return localise[s];
}
return s;
}
