<template>
    <div class="contacts">
        <HeaderCompo class="header"></HeaderCompo>
    
    </div>
</template>
<script>
import HeaderCompo from '@/components/HeaderCompo.vue';
import FooterCompo from '@/components/FooterCompo.vue';
import SidebarCompo from '@/components/SidebarCompo.vue';

export default {
  name: 'ContactsPage',
  components: {
    HeaderCompo,
    FooterCompo,
    SidebarCompo
  }
}
</script>

<style scoped>
.contacts {
    display: flex;
    flex-direction: column;
    height: 100vh
}
</style>