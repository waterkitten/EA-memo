<template>
  <div>
    <h1>写下✍今日安排吧</h1>
    <form @submit.prevent="createEvent">
      <label>电协部门😀</label>
      <select v-model="event.category">
        <option v-for="cat in categories"
                :key="cat">{{ cat }}</option>
      </select>

      <h3>日志名字👳‍♂️相关描述</h3>
      <div class="field">
        <label>标题 </label>
        <input v-model="event.title"
               type="text"
               placeholder="Add an event title" />
      </div>

      <div class="field">
        <label>详情 </label>
        <input v-model="event.description"
               type="text"
               placeholder="Add a description" />
      </div>

      <h3>所在( ఠൠఠ )ﾉ地方</h3>
      <div class="field">
        <label>地点😀</label>
        <input v-model="event.location"
               type="text"
               placeholder="Add a location" />
      </div>

      <h3>案发(●ˇ∀ˇ●)事件</h3>

      <div class="field">
        <label>日期🥨</label>
        <datepicker v-model="event.date"
                    placeholder="Select a date" />
      </div>

      <div class="field">
        <label>时间🚵‍♂️</label>
        <select v-model="event.time">
          <option v-for="time in times"
                  :key="time">{{ time }}</option>
        </select>
      </div>

      <input type="submit"
             class="button -fill-gradient"
             value="Submit" />
    </form>
  </div>
</template>


<script>
import Datepicker from 'vuejs-datepicker'

export default {
  components: {
    Datepicker
  },
  data () {
    const times = []
    for (let i = 1; i <= 24; i++) {
      times.push(i + ':00')
    }
    return {
      times,
      categories: this.$store.state.categories,
      event: this.createFreshEventObject()
    }
  },
  methods: {
    createEvent () {
      this.$store
        .dispatch('event/createEvent', this.event)
        .then(() => {
          this.$router.push({
            name: 'event-show',
            params: { id: this.event.id }
          })
          this.event = this.createFreshEventObject()
        })
        .catch(() => {
          console.log('There was a problem creating your event')
        })
    },
    createFreshEventObject () {
      const user = this.$store.state.user.user
      const id = Math.floor(Math.random() * 10000000)

      return {
        id: id,
        user: user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      }
    }
  }
}
</script>

<style scoped>
.field {
  margin-bottom: 24px;
}
</style>
