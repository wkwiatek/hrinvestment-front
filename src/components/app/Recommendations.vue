<template>
  <div class="wrapper-md">
    <div class="panel panel-default">
      <div class="panel-heading">
        Wszystkie rekomendacje
        <span class="label bg-success">{{recommendations.length}}</span>
      </div>
      <div>
        <table class="table">
          <thead>
          <tr>
            <th>Imię</th>
            <th>Nazwisko</th>
            <th>Dodane przez</th>
            <th>IP</th>
            <th>IP miasto</th>
            <th>IP kraj</th>
            <th>Plik</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="rec in recommendations">
            <td>{{rec.name}}</td>
            <td>{{rec.surname}}</td>
            <td>{{rec.recommendedBy}}</td>
            <td>{{rec.ip ? rec.ip.address : ''}}</td>
            <td>{{rec.ip ? rec.ip.city : ''}}</td>
            <td>{{rec.ip ? rec.ip.country : ''}}</td>
            <td><a v-if="rec.fileUrl" href="{{rec.fileUrl}}" class="btn btn-xs btn-success">Pobierz plik</a></td>
          </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>


</template>

<script>
import { getAllRecommendations } from '../../vuex/actions/recommendations'

export default {
  vuex: {
    getters: {
      recommendations: ({ recommendations }) => recommendations.all
    },
    actions: {
      getAllRecommendations
    }
  },
  ready () {
    this.getAllRecommendations()
  }
}
</script>
