<template>
  <a-table :columns="columns" :data-source="data">
    <a slot="name" slot-scope="text">{{ text }}</a>
    <span slot="customTitle"><a-icon type="smile-o" /> Name</span>
    <span slot="tags" slot-scope="tags">
      <a-tag
        v-for="tag in tags"
        :key="tag"
        :color="
          tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'
        "
      >
        {{ tag.toUpperCase() }}
      </a-tag>
    </span>
    <span slot="action" slot-scope="text, record">
      <a>Invite 一 {{ record.name }}</a>
      <a-divider type="vertical" />
      <a>Delete</a>
      <a-divider type="vertical" />
      <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>
    </span>
  </a-table>
</template>

<script>
const columns = [
  {
    dataIndex: 'name',
    key: 'name',
    slots: { title: 'customTitle' },
    scopedSlots: { customRender: 'name' }
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    scopedSlots: { customRender: 'tags' }
  },
  {
    title: 'Action',
    key: 'action',
    scopedSlots: { customRender: 'action' }
  }
]
export default {
  async asyncData(ctx) {
    // global.console.log('_id asyncData')
    const { id } = ctx.params
    const {
      status,
      data: { list }
    } = await ctx.$axios.post('http://localhost:6010/user/detail', { id })
    if (status === 200) {
      return {
        data: list
      }
    } else {
      return {
        data: []
      }
    }
  },
  // async asyncData(ctx) {
  //   // global.console.log('_id asyncData')
  //   const { id } = ctx.params
  //   const {
  //     status,
  //     data: { list }
  //   } = await ctx.$axios.post('/user/detail', { id })
  //   if (status === 200) {
  //     return {
  //       data: list
  //     }
  //   } else {
  //     return {
  //       data: []
  //     }
  //   }
  // },
  data() {
    return {
      columns
    }
  },
  mounted() {
    // console.log(this.$store.state)
  }
}
</script>

<style></style>
