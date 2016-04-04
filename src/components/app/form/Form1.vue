<template>
  <div class="bg-light lter b-b wrapper-md hidden-print">
    <h1 class="m-n font-thin h3">Formularz 1</h1>
  </div>
  <div class="wrapper">
    <div class="panel panel-default">
      <div class="panel-heading font-bold">Podstawowe informacje</div>
      <div class="panel-body">
        <form class="form-horizontal">
          <div class="form-group">
            <label class="col-sm-2 control-label">Imię</label>
            <div class="col-sm-10">
              <input type="text" class="form-control rounded">
            </div>
          </div>
          <div class="form-group">
          <label class="col-sm-2 control-label">Nazwisko</label>
          <div class="col-sm-10">
            <input type="text" class="form-control rounded">
            <span class="help-block m-b-none">A block of help text that breaks onto a new line and may extend beyond one line.</span>
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label">Aktywny</label>
          <div class="col-sm-10">
            <label class="i-switch i-switch-md bg-info m-t-xs m-r">
              <input type="checkbox" checked="">
              <i></i>
            </label>
          </div>
        </div>
        </form>
      </div>
    </div>

    <div class="panel panel-default">
      <div class="panel-heading font-bold">Dodatkowe</div>
      <div class="panel-body">
        <form class="form-horizontal">
          <div class="form-group">
            <label class="col-sm-2 control-label">Adres</label>
            <div class="col-sm-10">
              <input type="text" class="form-control rounded">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">Inne informacje</label>
            <div class="col-sm-10">
              <input type="text" class="form-control rounded">
            </div>
          </div>
          <div class="form-group">
            <label class="col-sm-2 control-label">Dodatkowe</label>
            <div class="col-sm-10">
              <label class="checkbox-inline i-checks">
                <input type="checkbox" value="option1"><i></i> a
              </label>
              <label class="checkbox-inline i-checks">
                <input type="checkbox" value="option2"><i></i> b
              </label>
              <label class="checkbox-inline i-checks">
                <input type="checkbox" value="option3"><i></i> c
              </label>
            </div>
          </div>
          <div class="form-group">
          <label class="col-sm-2 control-label">Plik</label>
          <div class="col-sm-10">
            <input type="file" data-classinput="form-control inline v-middle input-s" id="filestyle-0" tabindex="-1" style="position: absolute; clip: rect(0px 0px 0px 0px);">
            <div class="bootstrap-filestyle input-group">
              <input type="text" class="form-control " disabled="">
              <span class="group-span-filestyle input-group-btn" tabindex="0">
                <label for="filestyle-0" class="btn btn-default ">
                  <span class="glyphicon glyphicon-folder-open"></span>&nbsp;&nbsp;Wybierz plik
                </label>
              </span>
          </div>
          </div>
        </div>
        </form>
      </div>
    </div>

    <div class="container">
      <div class="row text-center">
        <button type="submit" class="btn btn-lg btn-primary btn-rounded">Zapisz</button>
      </div>
    <div>
  </div>
</template>
