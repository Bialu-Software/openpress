<template>
    <Navbar style="background: #fff;"></Navbar>

    <div id="post-content" class="section error" v-if="!post.id">
        <i class="bi bi-exclamation-triangle-fill"></i>
        <h1>The post was not found</h1>
        <p>
            Oops! The requested blog post was not found. The post does not seem to exist. Sorry for the inconvenience. While we investigate whether this is an error, please check out our other engaging content. 
            <br><br>
            Link back to the home page: <a href="/">Link</a>
        </p>
    </div>
    <div id="post-content" class="section" v-else>
        <div class="above-img">
            <h1 class="post-title">{{ post.headline }}</h1>
            <div class="date info">
                <p class="info-text">Posted On</p>
                <h4 class="info-value">{{ formatTimestamp(post.timestamp) }}</h4>
            </div>
        </div>
        <img :src="post.imageUrl" class="post-img" alt="Post image" draggable="false">
        <div class="under-img">
            <div class="author">
                <img src="https://media.extra.cz/static/img/2020/12/c39c180-103863-sym6-2500.jpg" class="author-img" alt="Author profile image" draggable="false">
                <div class="info">
                    <p class="info-text">Written By</p>
                    <h4 class="info-value">{{ post.author }}</h4>
                </div>
            </div>
            <div class="share info">
                <p class="info-text">Share On</p>
                <h4 class="info-value">
                    <a href="#" class="share-link"><i class="bi bi-facebook"></i></a> 
                    <a href="#" class="share-link"><i class="bi bi-twitter"></i></a>

                    <span class="line"></span> 

                    <a href="#" class="share-link"><i class="bi bi-link-45deg"></i></a>
                </h4>
            </div>
        </div>

        <div class="content">
            <div v-html="post.html"></div>
            <!--
                <h1 id="e2f3" class="ox oy gy be oz pa pb hu pc pd pe hx pf pg ph pi pj pk pl pm pn po pp pq pr ps bj" data-selectable-paragraph="" style="box-sizing: inherit; line-height: 30px;"><span class="al" style="box-sizing: inherit; font-family: Arial, Helvetica, sans-serif;">Happiness In Strangers</span></h1><p id="5a33" class="pw-post-body-paragraph oa ob gy gz b hs pt od oe hv pu og oh oi pv ok ol om pw oo op oq px os ot ou gr bj" data-selectable-paragraph="" style="text-align: justify; box-sizing: inherit; margin: 0.86em 0px -0.46em; word-break: break-word; line-height: 32px;"><span style="font-family: &quot;Times New Roman&quot;, Times, serif;"><span style="font-size: large; line-height: 1.5;">Happiness In Strangers “Don’t talk to strangers!” I must have heard it a thousand times growing up — those scary, unknown, possibly dangerous humans we call strangers. The problem is that, with a moment of self-reflection, you realize that to the 99.9% of other humans on this planet, you’re one of those scary strangers, too. But how could that be? You’re not scary, ill-intentioned, or maleficent. And, of course, the probability is that the vast majority of those who we think of as strangers are just like you — good people, trying to figure out how to pay their bills, take care of their families, and do a bit of good in the world. Which is exactly the insight that led Dr. Nicholas Epley and colleagues, at the University of Chicago, to run an experiment about talking to strangers on buses. To Dr. Epley, happiness is all around us — all day, every day — in the form of strangers. If conversations with others are a meaningful source of happiness, Dr. Epley wondered, what would happen if you asked people to get onto a bus, deliberately sit next to a stranger, introduce themselves, and try to keep a conversation going during their commute? In a set of nine different experiments, this is exactly what Epley and colleagues did. But, as good scientists, they first wanted to know what the people in the experiment expected those conversations to feel like. And sure enough, they expected the interactions to feel awkward, unpleasant, and like they were going to feel like a bother to the other person. As it turns out, their expectations were exactly wrong. By the end of the conversation, they rated their commute as more pleasant and enjoyable when they chit-chatted with a perfect stranger than when they just kept to themselves. Let that soak in. Their brains made a prediction: “This is going to be awful.” Then they did the “awful” thing and found that it was highly enjoyable. In science lingo, we call this a “prediction error.” In normal language, we call this: your brain lying to you. So why do we resist the very thing that brings joy, health, and meaning to our lives?</span></span><br></p><p><span style="font-family: Arial, Helvetica, sans-serif;"><br></span></p><p><span style="font-family: Arial, Helvetica, sans-serif;"><br></span></p><h2><strong style="font-family: Arial, Helvetica, sans-serif;">Example code:</strong></h2><pre class="language-html"><code class="language-html" style="font-family: Arial, Helvetica, sans-serif;"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Href Attribute Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>Href Attribute Example<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>https://www.freecodecamp.org/contribute/<span class="token punctuation">"</span></span><span class="token punctuation">&gt;</span></span>The freeCodeCamp Contribution Page<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span> shows you how and where you can contribute to freeCodeCamp's community and growth. <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span> <p style="text-align: justify;"><span class="token tag" style="font-size: 1em; word-spacing: normal;"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation" style="font-size: 1em; word-spacing: normal;">&gt;</span></p></code></pre><p style="text-align: justify;"><span style="white-space-collapse: preserve;"><span style="font-size: large; font-family: &quot;Times New Roman&quot;, Times, serif;">In this blog post, we'll share five simple and effective ways to supercharge your productivity and get more done in less time. From organizing your workspace to setting clear goals, these tips are easy to implement and will help you make the most</span></span></p><p style="text-align: justify;"><span style="white-space-collapse: preserve;"><span style="font-size: large; font-family: &quot;Times New Roman&quot;, Times, serif;">In this blog post, we'll share five simple and effective ways to supercharge your productivity and get more done in less time. From organizing your workspace to setting clear goals, these tips are easy to implement and will help you make the most of your day!In this blog post, we'll share five simple and effective ways to supercharge your productivity and get more done in less time. From organizing your workspace to setting clear goals, these tips are easy to implement and will help you make the most of your day!</span></span></p><p><span style="white-space-collapse: preserve; font-family: Arial, Helvetica, sans-serif;"><br></span></p><p><span style="white-space-collapse: preserve; font-family: Arial, Helvetica, sans-serif;"><br></span></p><h2><strong style="font-family: Arial, Helvetica, sans-serif;">Output:</strong></h2><pre class="language-html" style="line-height: 1.5;"><h1><span style="font-family: Arial, Helvetica, sans-serif;">Href Attribute Example</span></h1><p><a href="https://www.freecodecamp.org/contribute/" target="_self" style="font-family: Arial, Helvetica, sans-serif;">The freeCodeCamp Contribution Page</a><span style="font-family: Arial, Helvetica, sans-serif;">&nbsp;shows you how and where you can contribute to freeCodeCamp's community and growth.</span><span style="font-family: &quot;Times New Roman&quot;, Times, serif;"><br></span></p><span style="font-family: &quot;Times New Roman&quot;, Times, serif;"><code class="language-html"></code></span></pre><p><span style="font-size: large; font-family: &quot;Times New Roman&quot;, Times, serif; line-height: 1.5;">In this blog post, we'll share five simple and effective ways to supercharge your productivity and get more done in less time. From organizing your workspace to setting clear goals, these tips are easy to implement and will help you make the most<br><br>In this blog post, we'll share five simple and effective ways to supercharge your productivity and get more done in less time. From organizing your workspace to setting clear goals, these tips are easy to implement and will help you make the most of your day!In this blog post, we'll share five simple and effective ways to supercharge your productivity and get more done in less time. From organizing your workspace to setting clear goals, these tips are easy to implement and will help you make the most of your day!</span></p><p><br></p><p><br></p><h2><span style="font-family: Arial, Helvetica, sans-serif;">Image:</span></h2><p><span style="font-family: Arial, Helvetica, sans-serif;"><img src="https://nikonblog.cz/wp-content/uploads/2020/08/rano-ve-smrzovce-marketa-butalova.jpg" alt="Nikonblog.cz > Taková obyčejná česká krajina… červencová Fotka měsíce  Nikonblogu ve výsledcích" style="width: 100%; max-width: 1186px; height: auto; max-height: 790px;"><br></span></p><h2><span style="font-family: Arial, Helvetica, sans-serif;"><br></span></h2><p><span style="font-family: Arial, Helvetica, sans-serif;"><br></span></p><h2><span style="font-family: Arial, Helvetica, sans-serif;">hmmm:</span></h2><ul style="line-height: 1.5;"><li><span style="font-family: Arial, Helvetica, sans-serif;">hmm</span><br></li><li><span style="font-family: Arial, Helvetica, sans-serif;">hmm</span><br></li><li><span style="font-family: Arial, Helvetica, sans-serif;">hmm</span><br></li><ul><li><span style="font-family: Arial, Helvetica, sans-serif;">hmm2</span></li><li><span style="font-family: Arial, Helvetica, sans-serif;">hmm2</span></li><li><span style="font-family: Arial, Helvetica, sans-serif;">hmm2</span></li></ul></ul><p><font face="Arial, Helvetica, sans-serif"><br></font></p><p><font face="Arial, Helvetica, sans-serif"><br></font></p><h2><font color="#c0504d" face="Arial, Helvetica, sans-serif">Warning!!</font></h2><p><span style="font-size: large; color: rgb(192, 80, 77); line-height: 1.5; font-family: &quot;Times New Roman&quot;, Times, serif;">In this blog post, we'll share five simple and effective ways to supercharge your productivity and get more done in less time. From organizing your workspace to setting clear goals, these tips are easy to implement and will help you make the most<br>In this blog post, we'll share five simple and effective ways to supercharge your productivity and get more done in less time. From organizing your workspace to setting clear goals, these tips are easy to implement and will help you make the most of your day!In this blog post, we'll share five simple and effective ways to supercharge your productivity and get more done in less time. From organizing your workspace to setting clear goals, these tips are easy to implement and will help you make the most of your day!</span></p>
            -->
        </div>

        <div class="post-footer">
            <div class="tags">
                <p class="tag" v-for="(tag) in post.tags">{{ tag }}</p>
            </div>
            <div class="info save-post">
                <p class="info-text">Save Post:</p>
                <h4 class="info-value"><i class="bi bi-bookmark"></i></h4>
            </div>
        </div>
    </div>

    <section id="topRated-posts" class="section">
        <h2 class="section-title">Top rated</h2>
        <CardGrid></CardGrid>
    </section>

    <SubscribeForm id="subscribe-form" class="section"></SubscribeForm>

    <Footer class="section"></Footer>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import CardGrid from '@/components/basics/CardGrid.vue';
import Footer from '@/components/Footer.vue';
import Navbar from '@/components/Navbar.vue';
import SubscribeForm from "@/components/SubscribeForm.vue";
import data from "../../backend/data.json";
import CardPost from '@/components/basics/CardPost.vue';

import { formatTimestamp } from "@/components/basics/functions";
import { Post } from "@/components/basics/interfaces";


export default defineComponent({
    name: 'PostView',
    components: {
        CardGrid,
        Footer,
        Navbar,
        SubscribeForm,
        CardPost
    },
    data() {
        return {
            post: {} as Post,
            formatTimestamp
        }
    },
    mounted() {
        let post = data.find((post: any) => post.id == Number(this.$route.params.id));
        if(post != undefined) this.post = post;
    }
});
</script>
  
<style lang="scss" scoped>
@import url("../assets/codePostFormater.scss");

#post-content {
    display: flex;
    flex-direction: column;
    gap: 35px;
    padding-top: 90px;
    padding-bottom: 90px;
    margin-top: -90px;
    background: #fff;

    .info {
        display: flex;
        flex-direction: column;
        gap: 5px;

        .info-text {
            font-size: 15px;
            color: #3F3F3F;
        }

        .info-value {
            font-size: 18px;
            color: #000000;
            font-weight: 700;
        }
    }

    .above-img {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        gap: 20px;

        .post-title {
            flex: 6.5;
        }

        .date .info-value {
            text-transform: uppercase;
        }
    }

    .post-img {
        width: 100%;
        height: 500px;
        border-radius: 10px;
        position: relative;
        object-fit: cover;
    }

    .under-img {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        gap: 20px;

        .author {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 5px;

            .author-img {
                max-width: 50px;
                border-radius: 50%;
            }
        }

        .share .info-value {
            display: flex;
            flex-direction: row;
            gap: 5px;

            .share-link {
                color: #000000;
                font-size: 20px;
                transition: 0.2s;

                &:hover {
                    opacity: 0.6;
                }
            }

            .line {
                width: 1px;
                max-height: 100px;
                background: #000000;
                border-radius: 50%;
                margin-right: 5px;
                margin-left: 5px;
            }
        }
    }

    .post-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 20px;
        padding-top: 35px;
        border-top: 1px solid #C8C8C8;

        .tags {
            display: flex;
            flex-direction: row;
            gap: 13px;
            flex-wrap: wrap;
            flex: 2;

            .tag {
                padding: 5px 15px;
                background: rgba(86, 98, 242, 0.1);
                border-radius: 4px;
            }
        }

        .save-post {
            flex-direction: row;
            align-items: center;

            .info-value {
                color: #000000;
                font-size: 20px;
                transition: 0.2s;
                cursor: pointer;

                &:hover {
                    opacity: 0.6;
                }
            }
        }
    }
}

#post-content:is(.error) {
    gap: 20px;
    
    i {
        font-size: 70px;
    }

    a {
        text-transform: uppercase;
        color: #8B94FF;
        font-weight: 700;
        text-decoration: none;
        transition: 0.2s;

        &:hover {
            opacity: 0.7;
        }
    }
}

@media (max-width: 587px) {
    #post-content .above-img {
        flex-direction: column;
        align-items: flex-start;
    }

    #post-content .post-footer {
        flex-direction: column;
    }
}

@media (max-width: 454px) {
    #post-content {
        padding: 20px;
        width: auto;

        .post-img {
            height: 300px;
        }
    }
}
</style>