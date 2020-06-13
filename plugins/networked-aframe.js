// import io from 'socket.io-client';  //nuxt.config側に追記→ build: {vendor: ["socket.io-client"],
// import 'aframe'
// import 'networked-aframe'

// schemaに patchを当てる

let s = window.NAF.schemas 

s.isTemplateTag =  (el) => {
    return el.tagName.toLowerCase() === 'naf-template';
}
s.add = (schema) => {
    if (s.validateSchema(schema)) {
      s.schemaDict[schema.template] = schema;
      var templateEl = document.querySelector(schema.template);
      if (!templateEl) {
        NAF.log.error(`Template el not found for ${schema.template}, make sure NAF.schemas.add is called after <a-scene> is defined.`);
        return;
      }
      if (!s.validateTemplate(schema, templateEl)) {
        return;
      }
      //
      s.templateCache[schema.template] = templateEl;
    } else {
      NAF.log.error('Schema not valid: ', schema);
      NAF.log.error('See https://github.com/haydenjameslee/networked-aframe#syncing-custom-components');
    }
  }

s.getCachedTemplate = (template) =>  {
    if (!s.templateIsCached(template)) {
        if (s.templateExistsInScene(template)) {
          s.add(s.createDefaultSchema(template));
        } else {
          NAF.log.error(`Template el for ${template} is not in the scene, add the template to <a-assets> and register with NAF.schemas.add.`);
        }
    }
    return s.templateCache[template].firstElementChild.cloneNode(true);
}
s.templateHasOneOrZeroChildren = (el) => { 
  if(el.content){
    return el.content.childElementCount < 2;
  } else {
    return el.childElementCount < 2;  
  }
}
s.templateExistsInScene =  (templateSelector) => {
    var el = document.querySelector(templateSelector);
    return el  && s.isTemplateTag(el);
}