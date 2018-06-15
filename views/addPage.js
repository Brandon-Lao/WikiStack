const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`<h3>Add a Page</h3>
  <hr>
  <form method="post" action="/wiki">
    
    <div class="form-group">
      <label for="authorName" class="col-sm-2 control-label">Name</label>
        <input id="authorName" name="authorName" type="text" class="form-control"/>
    </div>
    
    <div class="form-group">
      <label for="authorEmail" class="col-sm-2 control-label">E-Mail</label>
        <input id="authorEmail" name="authorEmail" type="text" class="form-control"/>
    </div>
    
    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
        <input id="title" name="title" type="text" class="form-control"/>
    </div>

    <div class="form-group">
      <label for="content" class="col-sm-2 control-label">Content</label>
      <textarea id="content" name="content" type="text" class="form-control"> </textarea>
    </div>

    <div class="form-group">
      <label for="status" class="col-sm-2 control-label">Status</label>
        <input id="status" name="status" type="text" class="form-control"/>
    </div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>
  
  </form>
`);