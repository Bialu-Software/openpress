<template>
    <Navbar :activeLink="'contact'"></Navbar>

    <section id="contact-form" class="section">
        <h2 class="section-title" style="color: $headline-color;">Contact Us</h2>
        <form>
            <label for="name" style="color: $text-color;">Name:</label><br>
            <input type="text" id="name" name="name" placeholder="Your name" required><br>

            <label for="email" style="color: $text-color;">Email:</label><br>
            <input type="email" id="email" name="email" placeholder="Your email" required><br>

            <label for="message" style="color: $text-color;">Message:</label><br>
            <textarea id="message" name="message" placeholder="Your message" rows="4" required></textarea><br>

            <button type="submit" class="send-button"><span class="text">Submit</span></button>
        </form>
    </section>

    <section id="contact-info" class="section">
        <h2 class="section-title" style="color: $headline-color;">Our Contact Information</h2>
        <p style="color: $text-color;">Email: ---</p>
        <p style="color: $text-color;">Phone: ---</p>
        <p style="color: $text-color;">Address: ---</p>
    </section>

    <Footer id="footer" class="section"></Footer>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';

export default defineComponent({
    name: 'ContactsView',
    components: {
        Footer,
        Navbar,
    },
    data() {
        return {};
    },
    mounted() {
        document.title = 'OpenPress | Contacts';
    },
});
</script>
  
<style lang="scss">
@import '@/assets/styles/main';

#app {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 90px;
}

.section {
    padding-left: 150px;
    padding-right: 150px;
}

@media (max-width: 1409px) {
    .section {
        padding-left: 90px;
        padding-right: 90px;
    }
}

@media (max-width: 820px) {
    .section {
        padding-left: 50px;
        padding-right: 50px;
    }
}

@media (max-width: 454px) {
    #footer {
        padding: 0;
    }

    .section {
        // width: 100%;
        padding: 0;

        .section-title {
            padding-left: 20px;
        }
    }
}
</style>
  