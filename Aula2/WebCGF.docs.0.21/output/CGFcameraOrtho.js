Ext.data.JsonP.CGFcameraOrtho({"tagname":"class","name":"CGFcameraOrtho","autodetected":{},"files":[{"filename":"CGFcameraOrtho.js","href":null}],"members":[{"name":"_projectionMatrix","tagname":"property","owner":"CGFcameraOrtho","id":"property-_projectionMatrix","meta":{"private":true}},{"name":"_up","tagname":"property","owner":"CGFcameraOrtho","id":"property-_up","meta":{"private":true}},{"name":"_viewMatrix","tagname":"property","owner":"CGFcameraOrtho","id":"property-_viewMatrix","meta":{"private":true}},{"name":"bottom","tagname":"property","owner":"CGFcameraOrtho","id":"property-bottom","meta":{}},{"name":"far","tagname":"property","owner":"CGFcameraOrtho","id":"property-far","meta":{}},{"name":"left","tagname":"property","owner":"CGFcameraOrtho","id":"property-left","meta":{}},{"name":"near","tagname":"property","owner":"CGFcameraOrtho","id":"property-near","meta":{}},{"name":"position","tagname":"property","owner":"CGFcameraOrtho","id":"property-position","meta":{}},{"name":"right","tagname":"property","owner":"CGFcameraOrtho","id":"property-right","meta":{}},{"name":"target","tagname":"property","owner":"CGFcameraOrtho","id":"property-target","meta":{}},{"name":"top","tagname":"property","owner":"CGFcameraOrtho","id":"property-top","meta":{}},{"name":"up","tagname":"property","owner":"CGFcameraOrtho","id":"property-up","meta":{}},{"name":"CGFcameraOrtho","tagname":"method","owner":"CGFcameraOrtho","id":"method-CGFcameraOrtho","meta":{}},{"name":"calculateDirection","tagname":"method","owner":"CGFcameraOrtho","id":"method-calculateDirection","meta":{}},{"name":"getProjectionMatrix","tagname":"method","owner":"CGFcameraOrtho","id":"method-getProjectionMatrix","meta":{}},{"name":"getViewMatrix","tagname":"method","owner":"CGFcameraOrtho","id":"method-getViewMatrix","meta":{}},{"name":"orbit","tagname":"method","owner":"CGFcameraOrtho","id":"method-orbit","meta":{}},{"name":"pan","tagname":"method","owner":"CGFcameraOrtho","id":"method-pan","meta":{}},{"name":"rotate","tagname":"method","owner":"CGFcameraOrtho","id":"method-rotate","meta":{}},{"name":"setPosition","tagname":"method","owner":"CGFcameraOrtho","id":"method-setPosition","meta":{}},{"name":"setTarget","tagname":"method","owner":"CGFcameraOrtho","id":"method-setTarget","meta":{}},{"name":"setUp","tagname":"method","owner":"CGFcameraOrtho","id":"method-setUp","meta":{}},{"name":"translate","tagname":"method","owner":"CGFcameraOrtho","id":"method-translate","meta":{}},{"name":"zoom","tagname":"method","owner":"CGFcameraOrtho","id":"method-zoom","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-CGFcameraOrtho","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='doc-contents'><p>Class that represents the current view of a scene.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_projectionMatrix' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-property-_projectionMatrix' class='name expandable'>_projectionMatrix</a> : mat4<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Transformation matrix that corresponds to the current projection.</p>\n</div><div class='long'><p>Transformation matrix that corresponds to the current projection.</p>\n</div></div></div><div id='property-_up' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-property-_up' class='name expandable'>_up</a> : vec3<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Vector that points up.</p>\n</div><div class='long'><p>Vector that points up.</p>\n</div></div></div><div id='property-_viewMatrix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-property-_viewMatrix' class='name expandable'>_viewMatrix</a> : mat4<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'><p>Transformation matrix that corresponds to the current view.</p>\n</div><div class='long'><p>Transformation matrix that corresponds to the current view.</p>\n</div></div></div><div id='property-bottom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-property-bottom' class='name expandable'>bottom</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Bottom bound of the frustum.</p>\n</div><div class='long'><p>Bottom bound of the frustum.</p>\n</div></div></div><div id='property-far' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-property-far' class='name expandable'>far</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Far bound of the frustum.</p>\n</div><div class='long'><p>Far bound of the frustum.</p>\n</div></div></div><div id='property-left' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-property-left' class='name expandable'>left</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Left bound of the frustum.</p>\n</div><div class='long'><p>Left bound of the frustum.</p>\n</div></div></div><div id='property-near' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-property-near' class='name expandable'>near</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Near bound of the frustum.</p>\n</div><div class='long'><p>Near bound of the frustum.</p>\n</div></div></div><div id='property-position' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-property-position' class='name expandable'>position</a> : vec4<span class=\"signature\"></span></div><div class='description'><div class='short'><p>camera location.</p>\n</div><div class='long'><p>camera location.</p>\n</div></div></div><div id='property-right' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-property-right' class='name expandable'>right</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Right bound of the frustum.</p>\n</div><div class='long'><p>Right bound of the frustum.</p>\n</div></div></div><div id='property-target' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-property-target' class='name expandable'>target</a> : vec4<span class=\"signature\"></span></div><div class='description'><div class='short'><p>camera target.</p>\n</div><div class='long'><p>camera target.</p>\n</div></div></div><div id='property-top' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-property-top' class='name expandable'>top</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Top bound of the frustum.</p>\n</div><div class='long'><p>Top bound of the frustum.</p>\n</div></div></div><div id='property-up' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-property-up' class='name expandable'>up</a> : vec3<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Up vector.</p>\n</div><div class='long'><p>Up vector.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-CGFcameraOrtho' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-method-CGFcameraOrtho' class='name expandable'>CGFcameraOrtho</a>( <span class='pre'>left, right, bottom, top, near, far, position, target, up</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Creates a new camera instance with the given settings. ...</div><div class='long'><p>Creates a new camera instance with the given settings.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>left</span> : number<div class='sub-desc'><p>Left bound of the frustum</p>\n</div></li><li><span class='pre'>right</span> : number<div class='sub-desc'><p>Right bound of the frustum</p>\n</div></li><li><span class='pre'>bottom</span> : number<div class='sub-desc'><p>Bottom bound of the frustum</p>\n</div></li><li><span class='pre'>top</span> : number<div class='sub-desc'><p>Top bound of the frustum</p>\n</div></li><li><span class='pre'>near</span> : number<div class='sub-desc'><p>Near bound of the frustum</p>\n</div></li><li><span class='pre'>far</span> : number<div class='sub-desc'><p>Far bound of the frustum</p>\n</div></li><li><span class='pre'>position</span> : vec3<div class='sub-desc'><p>camera location</p>\n</div></li><li><span class='pre'>target</span> : vec3<div class='sub-desc'><p>camera target</p>\n</div></li><li><span class='pre'>up</span> : vec3<div class='sub-desc'><p>Up vector</p>\n</div></li></ul></div></div></div><div id='method-calculateDirection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-method-calculateDirection' class='name expandable'>calculateDirection</a>( <span class='pre'></span> ) : vec4<span class=\"signature\"></span></div><div class='description'><div class='short'>Calculates the #direction vector based on the position and target. ...</div><div class='long'><p>Calculates the #direction vector based on the <a href=\"#!/api/CGFcameraOrtho-property-position\" rel=\"CGFcameraOrtho-property-position\" class=\"docClass\">position</a> and <a href=\"#!/api/CGFcameraOrtho-property-target\" rel=\"CGFcameraOrtho-property-target\" class=\"docClass\">target</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>vec4</span><div class='sub-desc'><p>The current direction vector.</p>\n</div></li></ul></div></div></div><div id='method-getProjectionMatrix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-method-getProjectionMatrix' class='name expandable'>getProjectionMatrix</a>( <span class='pre'>width, height</span> ) : mat4<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the projection matrix for a given screen size. ...</div><div class='long'><p>Returns the projection matrix for a given screen size.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>width</span> : number<div class='sub-desc'><p>The width of the rendering screen.</p>\n</div></li><li><span class='pre'>height</span> : number<div class='sub-desc'><p>The height of the rendering screen.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>mat4</span><div class='sub-desc'><p>The current projection matrix for the given aspect ratio.</p>\n</div></li></ul></div></div></div><div id='method-getViewMatrix' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-method-getViewMatrix' class='name expandable'>getViewMatrix</a>( <span class='pre'></span> ) : mat4<span class=\"signature\"></span></div><div class='description'><div class='short'>Calculates the current view matrix. ...</div><div class='long'><p>Calculates the current view matrix.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>mat4</span><div class='sub-desc'><p>The current view matrix.</p>\n</div></li></ul></div></div></div><div id='method-orbit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-method-orbit' class='name expandable'>orbit</a>( <span class='pre'>axis, angle</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Rotates the camera a given angle, around its target, along a given axis. ...</div><div class='long'><p>Rotates the camera a given angle, around its target, along a given axis.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>axis</span> : <a href=\"#!/api/CGFcameraAxis\" rel=\"CGFcameraAxis\" class=\"docClass\">CGFcameraAxis</a><div class='sub-desc'><p>The axis along which to rotate.</p>\n</div></li><li><span class='pre'>angle</span> : number<div class='sub-desc'><p>The angle of rotation.</p>\n</div></li></ul></div></div></div><div id='method-pan' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-method-pan' class='name expandable'>pan</a>( <span class='pre'>vecValue</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Moves the camera along a plane perpendicular to the #direction ...</div><div class='long'><p>Moves the camera along a plane perpendicular to the #direction</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>vecValue</span> : vec3<div class='sub-desc'><p>Vector with the x and y offset in the perpendicular plane.</p>\n</div></li></ul></div></div></div><div id='method-rotate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-method-rotate' class='name expandable'>rotate</a>( <span class='pre'>axis, angle</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Rotates the camera in place a given angle along a given axis. ...</div><div class='long'><p>Rotates the camera in place a given angle along a given axis.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>axis</span> : <a href=\"#!/api/CGFcameraAxis\" rel=\"CGFcameraAxis\" class=\"docClass\">CGFcameraAxis</a><div class='sub-desc'><p>The axis along which to rotate.</p>\n</div></li><li><span class='pre'>angle</span> : number<div class='sub-desc'><p>The angle of rotation.</p>\n</div></li></ul></div></div></div><div id='method-setPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-method-setPosition' class='name expandable'>setPosition</a>( <span class='pre'>newPosition</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Setter for position. ...</div><div class='long'><p>Setter for <a href=\"#!/api/CGFcameraOrtho-property-position\" rel=\"CGFcameraOrtho-property-position\" class=\"docClass\">position</a>. Updates the #direction.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newPosition</span> : vec3<div class='sub-desc'><p>The new position for the camera.</p>\n</div></li></ul></div></div></div><div id='method-setTarget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-method-setTarget' class='name expandable'>setTarget</a>( <span class='pre'>newTarget</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Setter for target. ...</div><div class='long'><p>Setter for <a href=\"#!/api/CGFcameraOrtho-property-target\" rel=\"CGFcameraOrtho-property-target\" class=\"docClass\">target</a>. Updates the #direction.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newTarget</span> : vec3<div class='sub-desc'><p>The new target for the camera.</p>\n</div></li></ul></div></div></div><div id='method-setUp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-method-setUp' class='name expandable'>setUp</a>( <span class='pre'>camera</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>sets the camera up vector. ...</div><div class='long'><p>sets the camera <a href=\"#!/api/CGFcameraOrtho-property-up\" rel=\"CGFcameraOrtho-property-up\" class=\"docClass\">up</a> vector.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>camera</span> : vec3<div class='sub-desc'><h1>up vector.</h1>\n</div></li></ul></div></div></div><div id='method-translate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-method-translate' class='name expandable'>translate</a>( <span class='pre'>vecValue</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>vecValue</span> : vec3<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-zoom' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFcameraOrtho'>CGFcameraOrtho</span><br/></div><a href='#!/api/CGFcameraOrtho-method-zoom' class='name expandable'>zoom</a>( <span class='pre'>value</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Moves the camera towards its target. ...</div><div class='long'><p>Moves the camera towards its <a href=\"#!/api/CGFcameraOrtho-property-target\" rel=\"CGFcameraOrtho-property-target\" class=\"docClass\">target</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : number<div class='sub-desc'><p>Distance to move towards the <a href=\"#!/api/CGFcameraOrtho-property-target\" rel=\"CGFcameraOrtho-property-target\" class=\"docClass\">target</a>.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});