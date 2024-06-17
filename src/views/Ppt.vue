<template>
    <div class="self-main">
        <div class="chapter-title">✋《C/C++简明双链教程》课件</div>
        <div class="self-section">
            <div class="self-box">
                <!-- <div class="row"> -->
                    <div class="self-col">
                        <a href="assets/ppt/第二章 程序设计基础.pdf">
                            <div class="icon"><img src="../assets/ui/Frame 77.png" /></div>
                            <div class="con">第二章课件</div>
                        </a>
                    </div>
                    <div class="self-col">
                        <a href="assets/ppt/第三章 分支与函数初步.pdf">
                            <div class="icon"><img src="../assets/ui/Frame 78.png" /></div>
                            <div class="con">第三章课件</div>
                        </a>
                    </div>
                    <div class="self-col">
                        <a href="assets/ppt/第四章 循环.pdf.pdf">
                            <div class="icon"><img src="../assets/ui/Frame 79.png" /></div>
                            <div class="con">第四章课件</div>
                        </a>
                    </div>
                <!-- </div> -->
                <!-- <div class="row"> -->
                    <div class="self-col">
                        <a href="assets/ppt/第五章 数组与字符串.pdf">
                            <div class="icon"><img src="../assets/ui/Frame 80.png" /></div>
                            <div class="con">第五章课件</div>
                        </a>
                    </div>
                    <div class="self-col">
                        <a href="assets/ppt/第六章 指针.pdf">
                            <div class="icon"><img src="../assets/ui/Frame 81.png" /></div>
                            <div class="con">第六章课件</div>
                        </a>
                    </div>
                    <div class="self-col">
                        <a href="assets/ppt/第七章 面向对象.pdf">
                            <div class="icon"><img src="../assets/ui/Frame 82.png" /></div>
                            <div class="con">第七章课件</div>
                        </a>
                    </div>
                <!-- </div> -->
                <!-- <div class="row"> -->
                    <div class="self-col">
                        <a href="assets/ppt/第八章 模板和容器">
                            <div class="icon"><img src="../assets/ui/Frame 83.png" /></div>
                            <div class="con">第八章课件</div>
                        </a>
                    </div>
                <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default ({
    components: {
  },
    mounted(){
        hljs.initHighlightingOnLoad();
    // hljs.highlightAll();
		hljs.initLineNumbersOnLoad({
            singleLine:true,
            // startFrom: 5,
        });
    }
})
</script>

<style scoped>
    .ppt-page {
        background-color: #E5E5E5;

    }  
</style>
