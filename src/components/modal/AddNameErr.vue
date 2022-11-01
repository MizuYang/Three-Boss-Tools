<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header bg-danger">
          <h5 class="modal-title text-light">錯誤</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h5>新增失敗，請輸入角色名稱！！</h5>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/src/modal'
export default {

  data () {
    return {
      modal: ''

    }
  },

  watch: {
  },

  methods: {
    openModal () {
      this.modal.show()
    }
  },

  mounted () {
    this.modal = new Modal(this.$refs.modal)
  }

}
</script>

<style lang='scss' scope></style>
