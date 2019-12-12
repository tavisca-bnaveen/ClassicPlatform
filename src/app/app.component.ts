import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  elementApp: ElementRef<any>;
  constructor(element:ElementRef){
    this.elementApp = element;
  }
  ngOnInit(): void {
    this.connectDivs("js-trips","js-supps","#000000", 0.1,"js-trips-to-supps");
    this.connectDivs("js-engines","js-supps","#000000", 0.1,"js-engines-to-supps");
  }
  connectDivs(leftId, rightId, color, tension,svgId) {
    var left = document.getElementById(leftId);
    var right = document.getElementById(rightId);

    var leftPos = this.findAbsolutePosition(left);
    var x1 = leftPos.x;
    var y1 = leftPos.y;
    x1 += left.offsetWidth;
    y1 += left.offsetHeight / 2;

    var rightPos = this.findAbsolutePosition(right);
    var x2 = rightPos.x;
    var y2 = rightPos.y;
    y2 += right.offsetHeight / 2;

    var width = x2 - x1;
    var height = y2 - y1;

    this.drawCircle(x1, y1, 3, color);
    this.drawCircle(x2, y2, 3, color);
    this.drawCurvedLine(x1, y1, x2, y2, color, tension,svgId);
  }
  findAbsolutePosition(htmlElement) {
    var x = htmlElement.offsetLeft;
    var y = htmlElement.offsetTop;
    for (let x = 0, y = 0, el = htmlElement; el != null; el = el.offsetParent) {
      x += el.offsetLeft;
      y += el.offsetTop;
    }
    return {
      x: x,
      y: y
    };
  }
  drawCircle(x, y, radius, color) {
    let svg = this.createSVG();
    let shape = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    shape.setAttributeNS(null, "cx", x);
    shape.setAttributeNS(null, "cy", y);
    shape.setAttributeNS(null, "r", radius);
    shape.setAttributeNS(null, "fill", "#ffffff00");
    svg.appendChild(shape);
  }
  drawCurvedLine(x1, y1, x2, y2, color, tension,svgId) {
    let svg = this.createSVG();
    let shape = document.createElementNS("http://www.w3.org/2000/svg", "path");
    let delta = (x2 - x1) * tension;
    let hx1 = x1 + delta;
    let hy1 = y1;
    let hx2 = x2 - delta;
    let hy2 = y2;
    let path ="M " + x1 + " " + y1 + " C " + hx1 +" " +hy1 +" " +hx2 +" " +hy2 +" " +x2 +" " +y2;
    shape.setAttributeNS(null, "d", path);
    shape.setAttributeNS(null, "fill", "none");
    shape.setAttributeNS(null, "stroke", color);
    shape.setAttributeNS(null, "id", svgId);
    svg.appendChild(shape);
  }
  createSVG() {
    let svg = document.getElementById("svg-canvas");
    if (svg == null) {
      let MySvg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      MySvg.setAttribute("id", "svg-canvas");
      MySvg.setAttribute("style", "position:absolute;top:0px;left:0px;pointer-events: none;");
      MySvg.setAttribute("width", document.body.clientWidth.toString());
      MySvg.setAttribute("height", document.body.clientHeight.toString());
      MySvg.setAttributeNS(
        "http://www.w3.org/2000/xmlns/",
        "xmlns:xlink",
        "http://www.w3.org/1999/xlink"
      );
      document.body.appendChild(MySvg);
      this.elementApp.nativeElement.appendChild(MySvg);
      return MySvg;
    }
    return svg;
  }
}
