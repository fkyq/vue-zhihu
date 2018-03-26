<!--  -->
<template>
    <main class="story-list">
        <div class="story-list-item-container">
            <i class="remove">
                <svg viewBox="0 0 14 14" class="Icon Icon--remove" style="height:10px;width:10px;" width="10" height="10" aria-hidden="true" data-reactid="85">
                    <title data-reactid="86"></title>
                    <g data-reactid="87">
                        <path d="M8.486 7l5.208-5.207c.408-.408.405-1.072-.006-1.483-.413-.413-1.074-.413-1.482-.005L7 5.515 1.793.304C1.385-.103.72-.1.31.31-.103.724-.103 1.385.305 1.793L5.515 7l-5.21 5.207c-.407.408-.404 1.072.007 1.483.413.413 1.074.413 1.482.005L7 8.485l5.207 5.21c.408.407 1.072.404 1.483-.007.413-.413.413-1.074.005-1.482L8.485 7z"></path>
                    </g>
                </svg>
            </i>
            <div class="story-list-item">
                <div class="story-source">
                    <ul>
                        <li>{{story.source}}
                        </li>
                        <li>
                            <span class="header-icon"><img :src="story.authorHeadImg" alt=""> </span>
                            <span class="nickname">
                                <a :href="story.authorlink">{{story.authorNickname}}</a>
                            </span>
                            <span class="self-introduction">{{story.authorIntroduce}}</span>
                        </li>
                    </ul>
                </div>
                <div class="story-title">
                    <a :href="story.titleLink">{{story.title}}</a>
                </div>
                <div class="voters">
                    <span>306 人赞同了该回答</span>
                </div>
                <div class="story-content" v-html="story.text">
                    {{story.text}}
                </div>
                <div class="time">
                    <a href=""> 编辑于 2018-03-11</a>
                </div>
                <div class="story-footer-card">
                    <span>
                        <button class="vote">
                            <svg viewBox="0 0 20 18" class="vote-icon" width="9" height="16" aria-hidden="true" style="height: 16px; width: 9px;">
                                <title></title>
                                <g>
                                    <path d="M0 15.243c0-.326.088-.533.236-.896l7.98-13.204C8.57.57 9.086 0 10 0s1.43.57 1.784 1.143l7.98 13.204c.15.363.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H1.955c-1.08 0-1.955-.517-1.955-1.9z"></path>
                                </g>
                            </svg>
                            306
                        </button>
                        <button class="vote">
                            <svg viewBox="0 0 20 18" class="vote-icon rotate" width="9" height="16" aria-hidden="true" style="height: 16px; width: 9px;">
                                <title></title>
                                <g>
                                    <path d="M0 15.243c0-.326.088-.533.236-.896l7.98-13.204C8.57.57 9.086 0 10 0s1.43.57 1.784 1.143l7.98 13.204c.15.363.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H1.955c-1.08 0-1.955-.517-1.955-1.9z"></path>
                                </g>
                            </svg>
                        </button>
                    </span>
                    <span>
                        <button class="other">
                            <i>
                                <svg class="other-icon" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em" data-reactid="161">
                                    <path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z" fill-rule="evenodd" data-reactid="162"></path>
                                </svg>
                            </i>
                            9 条评论
                        </button>
                    </span>
                    <span>
                        <button class="other">
                            <i>
                                <svg class="other-icon" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em" data-reactid="169">
                                    <path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z" fill-rule="evenodd" data-reactid="170"></path>
                                </svg>
                            </i>
                            分享
                        </button>
                    </span>
                    <span>
                        <button class="other">
                            <i>
                                <svg class="other-icon" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em" data-reactid="176">
                                    <path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd" data-reactid="177"></path>
                                </svg>
                            </i>
                            收藏
                        </button>
                    </span>
                    <span>
                        <button class="other">
                            <i>
                                <svg class="other-icon" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                                    <path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd"></path>
                                </svg>

                            </i>
                            感谢
                        </button>
                    </span>

                    <span>
                        <button class="other">
                            <i>
                                <svg class="other-icon" fill="currentColor" viewBox="0 0 24 24" width="1.2em" height="1.2em" data-reactid="189">
                                    <path d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill-rule="evenodd" data-reactid="190"></path>
                                </svg>
                            </i>
                        </button>
                    </span>

                    <span class="hide">
                        <button class="other">
                            收起
                            <i>
                                <svg viewBox="0 0 10 6" class="other-icon rotate hide-icon" width="10" height="16" aria-hidden="true" style="height: 16px; width: 10px;">
                                    <title></title>
                                    <g>
                                        <path d="M8.716.217L5.002 4 1.285.218C.99-.072.514-.072.22.218c-.294.29-.294.76 0 1.052l4.25 4.512c.292.29.77.29 1.063 0L9.78 1.27c.293-.29.293-.76 0-1.052-.295-.29-.77-.29-1.063 0z"></path>
                                    </g>
                                </svg>
                            </i>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    </main>

</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {};
    },

    components: {},

    computed: {
        ...mapGetters(["story"])
    },

    mounted: {},

    methods: {}
};
</script>
<style>
.story-list-item-container {
    padding: 16px 20px;
    margin-bottom: 10px;
    position: relative;
    background: white;
}

.remove {
    position: absolute;
    top: 12px;
    right: 16px;
    color: #8590a6;
    cursor: pointer;
}
.story-source {
    color: #646464;
}
.story-source li {
    margin-bottom: 8px;
    color: #8590a6;
}
.story-source li:nth-child(2) {
    display: flex;
    align-items: center;
}
.header-icon {
    margin-right: 10px;
}

.nickname a {
    color: #444;
    font-weight: 600;
    font-size: 15px;
}

.self-introduction {
    color: #646464;
    font-size: 14px;
}

.self-introduction::before {
    content: "\FF0C";
}

.story-title a {
    line-height: 1.6;
    font-size: 18px;
    font-weight: 600;
    color: black;
}
.voters {
    margin-top: 10px;
    color: #8590a6;
}
.voters span {
    cursor: pointer;
}

.story-content {
    margin-top: 9px;
    line-height: 1.67;
    color: #3b3a3a;
}
.user-link {
    color: #175199;
}
.user-link:hover {
    text-decoration: underline;
}

.time {
    margin-top: 10px;
}
.time a {
    color: #8590a6;
}
.story-footer-card {
    padding: 10px 0;
    position: relative;
    display: flex;
    align-items: center;
}
.story-footer-card .vote {
    padding: 0 12px;
    background-color: #d9edff;
    color: #0084ff;
    line-height: 30px;
    border-radius: 3px;
    font-size: 14px;
}

.vote-icon {
    margin-right: 0px;
    vertical-align: text-bottom;
    color: #0084ff;
}
.rotate {
    transform: rotate(180deg);
}
.other {
    background-color: transparent;
    color: #8590a6;
    margin-left: 24px;
    font-size: 14px;
}
.other-icon {
    vertical-align: text-bottom;
}
.hide {
    /* position: absolute;
    right: 0; */
    flex: 1;
    display: flex;
    justify-content: flex-end;
}
</style>