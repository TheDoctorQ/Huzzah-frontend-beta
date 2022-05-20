
<script>
import axios from 'axios';

export default {
  data: function () {
    return {
      message: "Dazzling Daring Excitement for All Ages!",
      events: []
      // searchTerm: ""
    };
  },
  created: function () {
    console.log("in index")
    this.eventsIndex();
  },
  methods: {
    eventsIndex: function () {
      console.log('getting events')
      axios.get('/events.json').then(response => {
        console.log(response.data);
        this.events = response.data;
      })
    },
    // eventsFilter: function () {
    //   return this.events.filter(event => {
    //     var lowerTitle = Event.title.toLowerCase();
    //     var lowerSearchTerm = this.searchTerm.toLowerCase();
    //     return lowerTitle.includes(lowerSearchTerm);
    //   })
    // }
  },
};

</script>

<template>
  <div class="events">
    <h1><strong>{{ message }}</strong></h1>
    <!-- Search: <input type="text" v-model="lowerSearchTerm"> -->
    <div v-for="event in events" v-bind:key="event.id">
      <h2>{{ event.title }}</h2>
      {{ event.description }}
      <br />
      {{ event.time }}
      <br />
      <br />
      {{ event.location }}
      <br />
      <img v-for=" image in event.images" v-bind:src="image.url" style="max-width: 100%">
      <br />
      <hr />
    </div>
  </div>
</template>


<style>
/* css selector */
body {
  font-family: Futura, Trebuchet MS, Arial, sans-serif;
  background-image: url('https://www.toptal.com/designers/subtlepatterns/uploads/dynamic-style.png')
}

img {
  width: 350px;
  height: 400px;
}

/* css property */
</style>