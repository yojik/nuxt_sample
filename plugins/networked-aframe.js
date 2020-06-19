// import io from 'socket.io-client';  //nuxt.config側に追記→ build: {vendor: ["socket.io-client"],
// import 'aframe'
// import 'networked-aframe'

// schemaに patchを当てる
let s = window.NAF.schemas
s.templateHasOneOrZeroChildren = (el) => {
    return el.childNodes.length < 2
}
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
      let template = templateEl;
      template.normalize()
      s.templateCache[schema.template] = document.importNode(template, true);
    } else {
      NAF.log.error('Schema not valid: ', schema);
      NAF.log.error('See https://github.com/haydenjameslee/networked-aframe#syncing-custom-components');
    }
  }
