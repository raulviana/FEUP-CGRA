Ext.data.JsonP.CGFtexture({"tagname":"class","name":"CGFtexture","autodetected":{},"files":[{"filename":"CGFtexture.js","href":null}],"members":[{"name":"CGFtexture","tagname":"method","owner":"CGFtexture","id":"method-CGFtexture","meta":{}},{"name":"bind","tagname":"method","owner":"CGFtexture","id":"method-bind","meta":{}},{"name":"unbind","tagname":"method","owner":"CGFtexture","id":"method-unbind","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-CGFtexture","short_doc":"Handles texture loading, binding and unbinding. ...","classIcon":"icon-class","superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='doc-contents'><p>Handles texture loading, binding and unbinding. It can be used implicitly in CGFappearance,\nbut it also can be used to load textures independently and dynamically add them to appearances</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-CGFtexture' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFtexture'>CGFtexture</span><br/></div><a href='#!/api/CGFtexture-method-CGFtexture' class='name expandable'>CGFtexture</a>( <span class='pre'>scene, url</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scene</span> : <a href=\"#!/api/CGFscene\" rel=\"CGFscene\" class=\"docClass\">CGFscene</a><div class='sub-desc'>\n</div></li><li><span class='pre'>url</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-bind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFtexture'>CGFtexture</span><br/></div><a href='#!/api/CGFtexture-method-bind' class='name expandable'>bind</a>( <span class='pre'>unit</span> ) : boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Binds this texture, becoming the active texture. ...</div><div class='long'><p>Binds this texture, becoming the active texture. If another texture was bound, it will be unbound implicitly.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>unit</span> : int<div class='sub-desc'><p>texture unit to bind the texture. By default it is 0. Only needs to be used if using multi-texture shaders</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>boolean</span><div class='sub-desc'><p>true if texture was successfully bound, false otherwise (may happen if texture is still being loaded)</p>\n</div></li></ul></div></div></div><div id='method-unbind' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='CGFtexture'>CGFtexture</span><br/></div><a href='#!/api/CGFtexture-method-unbind' class='name expandable'>unbind</a>( <span class='pre'>unit</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Unbinds the currently bound texture. ...</div><div class='long'><p>Unbinds the currently bound texture.\nIt is one way to disable texturing.\nNot necessary if another texture is bound instead</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>unit</span> : int<div class='sub-desc'><p>texture unit to unbind. By default it is 0. Only needs to be used if using multi-texture shaders</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});