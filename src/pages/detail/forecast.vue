<template>
    <div class="sales-board">
        <div class="sales-board-intro">
            <h2>数据预测</h2>
            <p>未来，大数据会变得越来越重要，其核心应用预测也会成为互联网行业以及产业变革的重要力量，我们很有必要对数据预测及其分析方法进行全面且深入的了解。在这一点上，《大数据预测》是本很好的读物，适合大数据所有相关行业的人阅读。</p>
        </div>
        <div class="sales-board-form">
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    购买数量：
                </div>
                <div class="sales-board-line-right">
                    <v-counter></v-counter>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    媒介：
                </div>
                <div class="sales-board-line-right">
                    <v-multiply-chooser :selections="versionList"></v-multiply-chooser>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    有效时间：
                </div>
                <div class="sales-board-line-right">
                    <v-chooser :selections="periodList"></v-chooser>
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">
                    总价：
                </div>
                <div class="sales-board-line-right">
                    500 元
                </div>
            </div>
            <div class="sales-board-line">
                <div class="sales-board-line-left">&nbsp;</div>
                <div class="sales-board-line-right">
                    <div class="button">
                        立即购买
                    </div>
                </div>
            </div>
        </div>
        <div class="sales-board-des">
            <h2>产品说明</h2>
            <p>2020年的一天，在你驱车前往公司的路上，导航系统通过预测交通流量，会自动帮你选择一条最合适的交通路线；车内推荐系统会根据你的饮食习惯预测你可能会喜欢吃什么，并推荐沿途的早餐店；你的电子社交助理已经为你自动选择了你可能感兴趣的社交网信息；当车内系统预测到你驾车有些分心时，座椅会自动震动进行提醒…… 以上这些情景不是科幻大片独有的，它们有的已经或会在未来的某一天成为现实。而这一切所倚靠的就是预测分析技术。 大数据时代下，作为其核心，预测分析已在商业和社会中得到广泛应用。随着越来越多的数据被记录和整理，未来预测分析必定会成为所有领域的关键技术。 作为预测分析领域的专家，埃里克·西格尔博士深谙预测分析界已经实现和正在发生的事情、面临的问题和将来可能的前景。在《大数据预测》一书中，他结合预测分析的应用实例，对其进行了深入、细致且全面的解读。 关于预测分析，你想了解的全部，你的生活以及这个世界会因为预测分析改变到什么程度，《大数据预测》都会告诉你。
            </p>
        </div>
        <div class="sales-board-des">
            <h2>产品说明</h2>
            <p>网站访问统计分析报告的基础数据源于网站流量统计信息，但其价值远高于原始数据资料。专业的网站访问统计分析报告对网络营销的价值，正如专业的财务分析报告对企业经营策略的价值。</p>

            <h3>用户行为指标</h3>
            <ul>
                <li>用户行为指标主要反映用户是如何来到网站的、在网站上停留了多长时间、访问了哪些页面等，主要的统计指标包括：</li>
                <li>用户在网站的停留时间；</li>
                <li>用户来源网站（也叫“引导网站”）；</li>
                <li>用户所使用的搜索引擎及其关键词；</li>
                <li>在不同时段的用户访问量情况等。</li>
            </ul>

            <h3>浏览网站方式</h3>
            <ul>
                <li>用户上网设备类型</li>
                <li>用户浏览器的名称和版本</li>
                <li>访问者电脑分辨率显示模式</li>
                <li>用户所使用的操作系统名称和版本</li>
                <li>用户所在地理区域分布状况等</li>
            </ul>
        </div>
    </div>
</template>
<script>
import VCounter from '../../components/base/counter'
import VMultiplyChooser from '../../components/base/multiplyChooser'
import VChooser from '../../components/base/chooser'
export default {
    components: {
        VCounter,
        VMultiplyChooser,
        VChooser
    },
    data() {
        return {
            versionList: [
                {
                    label: '纸质报告',
                    value: 0
                },
                {
                    label: 'pdf',
                    value: 1
                },
                {
                    label: '页面报告',
                    value: 2
                },
                {
                    label: '邮件',
                    value: 3
                }
            ],
            periodList: [
                {
                    label: '半年',
                    value: 0
                },
                {
                    label: '一年',
                    value: 1
                },
                {
                    label: '三年',
                    value: 2
                }
            ]
        }
    }

}
</script>
<style>

</style>
