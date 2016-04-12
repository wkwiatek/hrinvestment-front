<template>
  <div class="wrapper">
    <div class="col-md-6 col-lg-offset-3">
      <div class="panel panel-default">
        <div class="panel-heading font-bold">Poleć pracownika</div>
        <div class="panel-body">
          <form novalidate @submit.prevent="send()" class="form-horizontal">
            <div class="form-group">
              <label class="col-sm-2 control-label">Imię</label>
              <div class="col-sm-10">
                <input v-model="form.name" type="text" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">Nazwisko</label>
              <div class="col-sm-10">
                <input v-model="form.surname" type="text" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">Stanowisko</label>
              <div class="col-sm-10">
                <input v-model="form.job" type="text" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">Telefon</label>
              <div class="col-sm-10">
                <input v-model="form.phone" type="text" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">Adres</label>
              <div class="col-sm-10">
                <input v-model="form.address" type="text" class="form-control">
              </div>
            </div>
            <div class="form-group">
              <label class="col-sm-2 control-label">Kraj</label>
              <div class="col-sm-10">
                <input v-model="form.country" type="text" class="form-control">
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
                <input type="file" data-classinput="form-control inline v-middle input-s" id="filestyle-0" tabindex="-1"
                       style="position: absolute; clip: rect(0px 0px 0px 0px);">
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
            <div class="row text-center">
              <button type="submit" class="btn btn-lg btn-success">Zapisz</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { sendWorkerRecommendationForm } from '../../../vuex/actions'

  export default {
    vuex: {
      actions: {
        sendWorkerRecommendationForm
      }
    },
    methods: {
      send () {
        this.$progress.start()
        this.sendWorkerRecommendationForm(this.form)
        this.$progress.finish()
      }
    },
    data () {
      return {
        form: {name: '', surname: '', job: '', phone: '', address: '', country: ''}
      }
    }
  }
</script>
