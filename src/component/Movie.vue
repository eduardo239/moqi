<template>
  <div class="card">
    <div><img src="../assets/poster.jpg" alt="" /></div>
    <div class="card-info">
      <div class="title">
        <span>Movie Name</span>
        <span>(2039)</span>
      </div>
      <p class="description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius molestiae
        quod iusto sed ratione facilis autem aperiam. Itaque at earum tempora,
        cupiditate ratione cumque accusantium. Ducimus praesentium repellat a
        excepturi.
      </p>
      <div class="buttons">
        <button>To Watch</button>
        <button>Watched</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
img {
  border-radius: 4px;
  height: 190px;
}
.card {
  display: flex;
  gap: 14px;
  padding: 14px;
  border-radius: 4px;
  background-color: #1d1d1d;
  width: 390px;
  height: 220px;
  border: 1px solid #7f7;
}

.card-info {
  color: #fff;
  display: flex;
  flex-direction: column;
  text-align: left;
  gap: 14px;
}

.title {
  display: flex;
  justify-content: space-between;
  align-content: center;
}
.title span {
  font-size: 1.25rem;
  font-weight: 700;
}
.description {
  overflow-y: scroll;
  opacity: 0.6;
  font-size: 0.9rem;
  line-height: 1.4;
  letter-spacing: 0.4px;
}
.buttons {
  display: flex;
  justify-content: space-between;
  gap: 14px;
}
</style>
