<template>
    <div class="header">
        <a href="#" class="post-link">
            <div class="latest-post" :style="'background: url(https://static.vecteezy.com/system/resources/previews/012/347/852/non_2x/post-computer-message-email-online-social-marketing-media-communication-cyberspace-laptop-web-network-information-hands-send-person-keyboard-corporate-notebook-company-business-spam-technology-screen-free-photo.jpg);' + 'background-repeat:no-repeat;background-position:center center;background-size:cover;'">
                <div class="content">
                    <p class="date">APRIL 8, 2023</p>
                    <h2 class="headline">5 Easy Ways to Boost Your Productivity Today!</h2>
                    <p class="description">In this blog post, we'll share five simple and effective ways to supercharge your productivity and get more done in less time. From organizing your workspace to setting clear goals, these tips are easy to implement and will help you make the most of your day!</p>

                    <div class="tags">
                        <p class="tag">#tutorial</p>
                        <p class="tag">#news</p>
                        <p class="tag">#it</p>
                    </div>


                    <div class="card-footer">
                        <p class="author">
                            <img class="profile-photo" src="https://media.extra.cz/static/img/2020/12/c39c180-103863-sym6-2500.jpg" alt="Profile photo">
                            <span class="name">Luboš Polívka</span>
                        </p>
                    </div>
                </div>
            </div>
        </a>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface Post {
    id: number;
    imageUrl: string;
    headline: string;
    text: string;
    html: string;
    author: string;
    tags: string[];
    timestamp: number;
}

export default defineComponent({
    name: 'LatestPost',
});
</script>

<style scoped lang="scss">
@import "@/assets/styles/main";

.header {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    align-items: center;
    margin-top: -20px;
}

.post-link {
    text-decoration: none;
    width: 100%;
}

.latest-post {
    width: 100%;
    min-height: 500px;
    border-radius: 10px;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    transition: 0.2s;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        height: 100%;
        background: $latestPost-background-gradient;
        border-radius: inherit;
    }

    &:hover {
        filter: brightness(95%);
    }

    .content {
        padding: 40px;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 20px;
        max-width: 35%;

        .date {
            text-transform: uppercase;
            font-size: 15px;
        }

        .headline {
            color: $card-headline-color;
            font-weight: bold;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            font-size: 35px;
        }

        .description {
            font-size: 20px;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
        }

        p {
            color: $card-text-color;
        }

        .card-footer {
            display: flex;
            justify-content: space-between;
            gap: 20px;

            .author {
                display: flex;
                gap: 10px;
                align-items: center;

                .name {
                    font-weight: 600;
                }

                .profile-photo {
                    max-width: 40px;
                    height: 40px;
                    border-radius: 50%;
                }
            }
        }

        .tags {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 13px;

            .tag {
                color: $latestPost-tags-color;
                padding: 10px 15px;
                background: $latestPost-tags-background;
                border-radius: 4px;
                font-size: 15px;
            }
        }

    }
}

@media (max-width: 1300px) {
    .latest-post {
        .content {
            max-width: 50%;
        }

        &::before {
            background: rgba(255, 255, 255, 0.8);
        }
    }
}

@media (max-width: 892px) {
    .latest-post .content {
        max-width: 100%;
    }
}

@media (max-width: 608px) {
    .latest-post .content {
        .headline {
            font-size: 30px;
        }

        .description {
            font-size: 18px;
        }
    }
}

@media (max-width: 454px) {
    .latest-post {
        border-radius: 0;
        width: 100%;

        .content {
            padding: 20px;
        }
    }
}
</style>