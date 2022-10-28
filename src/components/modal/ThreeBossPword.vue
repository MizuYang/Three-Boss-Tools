<template>
  <div class="modal" tabindex="-1" ref="modal">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title h4">三王密碼</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <img src="../../assets/三王.png" alt="三王密碼的圖片" class="d-block img-fluid mx-auto">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">關閉</button>
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
