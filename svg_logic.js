var xmlns = "http://www.w3.org/2000/svg";
var d = 1;

function createSVG(id, largeur, hauteur, title) {
	var svgElmt = document.createElementNS(xmlns, "svg");
	svgElmt.setAttributeNS(null, "width",  largeur+2*d);
	svgElmt.setAttributeNS(null, "height", hauteur+2*d);
	svgElmt.setAttributeNS(null, "id",     id);
	
	var t = document.createElementNS(xmlns, "title");
	t.appendChild(document.createTextNode(title));
	svgElmt.appendChild(t);
	
	return svgElmt;
}

function createDefs() {
	return document.createElementNS(xmlns, "defs");
}

function createHemiPermutohedron(id, r) {
	var r3 = r * Math.sqrt(3);
	
	var pts_externe = [
		[(-.5*r     ).toFixed(8)     , (     .5*r3   ).toFixed(8)].join(" "),
		[(-.5*r     ).toFixed(8)     , (     .5*r3+r ).toFixed(8)].join(" "), // carre du bas
		[(.5*r      ).toFixed(8)     , (      .5*r3+r).toFixed(8)].join(" "), // carre du bas
		[(.5*r      ).toFixed(8)     , (      .5*r3  ).toFixed(8)].join(" "),
		[(r         ).toFixed(8)     , (         r3  ).toFixed(8)].join(" "), // hexagone du bas droit
		[(2*r       ).toFixed(8)     , (       r3    ).toFixed(8)].join(" "), // hexagone du bas droit
		[(2.5*r     ).toFixed(8)     , (     .5*r3   ).toFixed(8)].join(" "), // hexagone du bas droit
		[(2*r       ).toFixed(8)     , (       0     ).toFixed(8)].join(" "), // hexagone du bas droit
		[(r         ).toFixed(8)     , (         0   ).toFixed(8)].join(" "),
		[(.5*r3+r   ).toFixed(8)     , (     -.5*r   ).toFixed(8)].join(" "), // carre du haut droit
		[(.5*(r3+r) ).toFixed(8)     , ( -.5*(r3+r)  ).toFixed(8)].join(" "), // carre du haut droit
		[(.5*r      ).toFixed(8)     , (      -.5*r3 ).toFixed(8)].join(" "),
		[(r         ).toFixed(8)     , (         -r3 ).toFixed(8)].join(" "), // hexagone du haut
		[(.5*r      ).toFixed(8)     , (      -1.5*r3).toFixed(8)].join(" "), // hexagone du haut
		[(-.5*r     ).toFixed(8)     , (     -1.5*r3 ).toFixed(8)].join(" "), // hexagone du haut
		[(-r        ).toFixed(8)     , (        -r3  ).toFixed(8)].join(" "), // hexagone du haut
		[(-.5*r     ).toFixed(8)     , (     -.5*r3  ).toFixed(8)].join(" "),
		[(-.5*(r+r3)).toFixed(8)     , (-.5*(r3+r)   ).toFixed(8)].join(" "), // carre du haut gauche
		[(-.5*r3-r  ).toFixed(8)     , (  -.5*r      ).toFixed(8)].join(" "), // carre du haut gauche
		[(-r        ).toFixed(8)     , (        0    ).toFixed(8)].join(" "),
		[(-2*r      ).toFixed(8)     , (      0      ).toFixed(8)].join(" "), // hexagone du bas gauche
		[(-2.5*r    ).toFixed(8)     , (    .5*r3    ).toFixed(8)].join(" "), // hexagone du bas gauche
		[(-2*r      ).toFixed(8)     , (      r3     ).toFixed(8)].join(" "), // hexagone du bas gauche
		[(-r        ).toFixed(8)     , (        r3   ).toFixed(8)].join(" ")  // hexagone du bas gauche
	];
	
	var pts_interne = [
		[-.5*r, .5*r3 ].join(" "),
		[.5*r,  .5*r3 ].join(" "),
		[r,     0     ].join(" "),
		[.5*r,  -.5*r3].join(" "),
		[-.5*r, -.5*r3].join(" "),
		[-r,    0     ].join(" ")
	];
	
	var path_externe = document.createElementNS(xmlns, "path");
	path_externe.setAttributeNS(null, "d", "M" + pts_externe.join(" L") + " Z");
	var path_interne = document.createElementNS(xmlns, "path");
	path_interne.setAttributeNS(null, "d", "M" + pts_interne.join(" L") + " Z");
	
	var g = document.createElementNS(xmlns, "g");
	g.setAttributeNS(null, "id", id);
	
	g.appendChild(path_externe);
	g.appendChild(path_interne);
	return g;
}

function createUse(x, y, angle, href, fill, stroke) {
	var u = document.createElementNS(xmlns, "use");
	u.setAttributeNS(null, "x", x);
	u.setAttributeNS(null, "y", y);
	u.setAttributeNS(null, "href", href);
	u.setAttributeNS(null, "fill", fill);
	u.setAttributeNS(null, "stroke", stroke);
	u.setAttributeNS(null, "transform", "rotate("+angle+", "+(x)+", "+(y)+")");
	return u;
}

