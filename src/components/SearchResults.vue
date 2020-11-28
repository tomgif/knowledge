<template>
  <section class="posts">
    <article v-for="item in value" :key="item.id">
      <dl>
        <dt>
          <strong>{{ item.id }}. {{ item.question }}</strong>
        </dt>
        <dd>
          <div
            v-for="(answer, aindex) in item.answers"
            :key="[aindex, item.id].join('-')"
          >
            <strong v-if="answer.correct">
              {{ alpha[aindex].toUpperCase() }}: {{ answer.title }}
            </strong>
            <span v-else>
              {{ alpha[aindex].toUpperCase() }}: {{ answer.title }}
            </span>
          </div>
        </dd>
      </dl>
    </article>
  </section>
</template>

<script>
export default {
  name: "SearchResults",
  props: {
    value: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      alpha: "abcdefghijklmnopqrstuvwxyz"
    };
  }
};
</script>

<style>
.posts dl {
  text-align: left;
}
</style>
