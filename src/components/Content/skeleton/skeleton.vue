<template name="skeleton">
    <view class="sk-container">
        <view is="components/navber/navber">
            <view class="navber navber--navber" style="padding-top:20px">
                <view class="navber-title navber--navber-title">
                    <text
                        class="navber-title-main navber--navber-title-main sk-transparent sk-text-14-2857-469 sk-text">小兔仙儿</text>
                    <text
                        class="navber-title-sign navber--navber-title-sign sk-transparent sk-text-14-2857-393 sk-text">|</text>
                    <text class="navber-title-p navber--navber-title-p sk-transparent sk-text-14-2857-488 sk-text">新鲜 · 亲民 ·
                        便捷</text>
                </view>
                <view class="search navber--search">
                    <view class="search-box navber--search-box">
                        <view
                            class="search-input navber--search-input iconfont navber--iconfont sk-pseudo sk-pseudo-circle sk-image"
                            placeholder="搜索商品" type="text"></view>
                        <text
                            class="search-QR navber--search-QR iconfont navber--iconfont icon-erweima navber--icon-erweima sk-pseudo sk-pseudo-circle"></text>
                    </view>
                </view>
            </view>
        </view>
        <view is="components/swiper/swiperMian">
            <view>
                <view is="node-modules/@dcloudio/uni-ui/lib/uni-swiper-dot/uni-swiper-dot"
                    class="uni-swiper-dot swiperMian--uni-swiper-dot">
                    <view class="uni-swiper__warp dot--uni-swiper__warp">
                        <swiper circular="true" class="swiper-box swiperMian--swiper-box" current="0" autoplay="false">
                            <swiper-item
                                style="position: absolute; width: 100%; height: 100%; transform: translate(0%, 0px) translateZ(0px);">
                                <view class="swiper-item swiperMian--swiper-item">
                                    <image mode="scaleToFill" class="sk-image"></image>
                                </view>
                            </swiper-item>
                        </swiper>
                        <view class="uni-swiper__dots-box dot--uni-swiper__dots-box" style="bottom:10px">
                            <view class="uni-swiper__dots-item dot--uni-swiper__dots-item"
                                style="width:20px;height:6px;background-color:rgba(255,255,255,.6);border:0px"></view>
                            <view class="uni-swiper__dots-item dot--uni-swiper__dots-item"
                                style="width:20px;height:6px;background-color:rgba(255,255,255,.3);border:0px"></view>
                            <view class="uni-swiper__dots-item dot--uni-swiper__dots-item"
                                style="width:20px;height:6px;background-color:rgba(255,255,255,.3);border:0px"></view>
                            <view class="uni-swiper__dots-item dot--uni-swiper__dots-item"
                                style="width:20px;height:6px;background-color:rgba(255,255,255,.3);border:0px"></view>
                            <view class="uni-swiper__dots-item dot--uni-swiper__dots-item"
                                style="width:20px;height:6px;background-color:rgba(255,255,255,.3);border:0px"></view>
                        </view>
                    </view>
                </view>
            </view>
        </view>
        <view is="pages/index/indexChild/indexMutli">
            <view class="mutli indexMutli--mutli data-v-9efaf8d2 indexMutli--data-v-9efaf8d2">
                <view class="mutli-box indexMutli--mutli-box data-v-9efaf8d2 indexMutli--data-v-9efaf8d2">
                    <image class="mutli-icon indexMutli--mutli-icon data-v-9efaf8d2 indexMutli--data-v-9efaf8d2 sk-image"
                        mode="aspectFit"></image>
                    <text class="data-v-9efaf8d2 indexMutli--data-v-9efaf8d2 sk-transparent sk-text-14-2857-460 sk-text"
                        style="background-position-x: 50%;">居家</text>
                </view>
                <view class="mutli-box indexMutli--mutli-box data-v-9efaf8d2 indexMutli--data-v-9efaf8d2">
                    <image class="mutli-icon indexMutli--mutli-icon data-v-9efaf8d2 indexMutli--data-v-9efaf8d2 sk-image"
                        mode="aspectFit"></image>
                    <text class="data-v-9efaf8d2 indexMutli--data-v-9efaf8d2 sk-transparent sk-text-14-2857-813 sk-text"
                        style="background-position-x: 50%;">锦鲤</text>
                </view>
                <view class="mutli-box indexMutli--mutli-box data-v-9efaf8d2 indexMutli--data-v-9efaf8d2">
                    <image class="mutli-icon indexMutli--mutli-icon data-v-9efaf8d2 indexMutli--data-v-9efaf8d2 sk-image"
                        mode="aspectFit"></image>
                    <text class="data-v-9efaf8d2 indexMutli--data-v-9efaf8d2 sk-transparent sk-text-14-2857-819 sk-text"
                        style="background-position-x: 50%;">服饰</text>
                </view>
                <view class="mutli-box indexMutli--mutli-box data-v-9efaf8d2 indexMutli--data-v-9efaf8d2">
                    <image class="mutli-icon indexMutli--mutli-icon data-v-9efaf8d2 indexMutli--data-v-9efaf8d2 sk-image"
                        mode="aspectFit"></image>
                    <text class="data-v-9efaf8d2 indexMutli--data-v-9efaf8d2 sk-transparent sk-text-14-2857-807 sk-text"
                        style="background-position-x: 50%;">母婴</text>
                </view>
                <view class="mutli-box indexMutli--mutli-box data-v-9efaf8d2 indexMutli--data-v-9efaf8d2">
                    <image class="mutli-icon indexMutli--mutli-icon data-v-9efaf8d2 indexMutli--data-v-9efaf8d2 sk-image"
                        mode="aspectFit"></image>
                    <text class="data-v-9efaf8d2 indexMutli--data-v-9efaf8d2 sk-transparent sk-text-14-2857-381 sk-text"
                        style="background-position-x: 50%;">个护</text>
                </view>
                <view class="mutli-box indexMutli--mutli-box data-v-9efaf8d2 indexMutli--data-v-9efaf8d2">
                    <image class="mutli-icon indexMutli--mutli-icon data-v-9efaf8d2 indexMutli--data-v-9efaf8d2 sk-image"
                        mode="aspectFit"></image>
                    <text class="data-v-9efaf8d2 indexMutli--data-v-9efaf8d2 sk-transparent sk-text-14-2857-896 sk-text"
                        style="background-position-x: 50%;">严选</text>
                </view>
                <view class="mutli-box indexMutli--mutli-box data-v-9efaf8d2 indexMutli--data-v-9efaf8d2">
                    <image class="mutli-icon indexMutli--mutli-icon data-v-9efaf8d2 indexMutli--data-v-9efaf8d2 sk-image"
                        mode="aspectFit"></image>
                    <text class="data-v-9efaf8d2 indexMutli--data-v-9efaf8d2 sk-transparent sk-text-14-2857-34 sk-text"
                        style="background-position-x: 50%;">数码</text>
                </view>
                <view class="mutli-box indexMutli--mutli-box data-v-9efaf8d2 indexMutli--data-v-9efaf8d2">
                    <image class="mutli-icon indexMutli--mutli-icon data-v-9efaf8d2 indexMutli--data-v-9efaf8d2 sk-image"
                        mode="aspectFit"></image>
                    <text class="data-v-9efaf8d2 indexMutli--data-v-9efaf8d2 sk-transparent sk-text-14-2857-949 sk-text"
                        style="background-position-x: 50%;">运动</text>
                </view>
                <view class="mutli-box indexMutli--mutli-box data-v-9efaf8d2 indexMutli--data-v-9efaf8d2">
                    <image class="mutli-icon indexMutli--mutli-icon data-v-9efaf8d2 indexMutli--data-v-9efaf8d2 sk-image"
                        mode="aspectFit"></image>
                    <text class="data-v-9efaf8d2 indexMutli--data-v-9efaf8d2 sk-transparent sk-text-14-2857-639 sk-text"
                        style="background-position-x: 50%;">杂项</text>
                </view>
                <view class="mutli-box indexMutli--mutli-box data-v-9efaf8d2 indexMutli--data-v-9efaf8d2">
                    <image class="mutli-icon indexMutli--mutli-icon data-v-9efaf8d2 indexMutli--data-v-9efaf8d2 sk-image"
                        mode="aspectFit"></image>
                    <text class="data-v-9efaf8d2 indexMutli--data-v-9efaf8d2 sk-transparent sk-text-14-2857-884 sk-text"
                        style="background-position-x: 50%;">品牌</text>
                </view>
            </view>
        </view>
        <view is="pages/index/indexChild/indexHotMutil">
            <view class="hotmutil indexHotMutil--hotmutil">
                <view class="hotmutil-item indexHotMutil--hotmutil-item">
                    <view class="hotmutil-textbox indexHotMutil--hotmutil-textbox">
                        <text class="sk-transparent sk-text-14-2857-450 sk-text">特惠推荐</text>
                        <text
                            class="hotmutil-alt indexHotMutil--hotmutil-alt sk-transparent sk-text-14-2857-768 sk-text">精选全攻略</text>
                    </view>
                    <view class="hotmutil-imagebox indexHotMutil--hotmutil-imagebox">
                        <image mode="scaleToFill" class="sk-image"></image>
                        <image mode="scaleToFill" class="sk-image"></image>
                    </view>
                </view>
                <view class="hotmutil-item indexHotMutil--hotmutil-item">
                    <view class="hotmutil-textbox indexHotMutil--hotmutil-textbox">
                        <text class="sk-transparent sk-text-14-2857-975 sk-text">爆款推荐</text>
                        <text
                            class="hotmutil-alt indexHotMutil--hotmutil-alt sk-transparent sk-text-14-2857-59 sk-text">最受欢迎</text>
                    </view>
                    <view class="hotmutil-imagebox indexHotMutil--hotmutil-imagebox">
                        <image mode="scaleToFill" class="sk-image"></image>
                        <image mode="scaleToFill" class="sk-image"></image>
                    </view>
                </view>
                <view class="hotmutil-item indexHotMutil--hotmutil-item">
                    <view class="hotmutil-textbox indexHotMutil--hotmutil-textbox">
                        <text class="sk-transparent sk-text-14-2857-68 sk-text">一站买全</text>
                        <text
                            class="hotmutil-alt indexHotMutil--hotmutil-alt sk-transparent sk-text-14-2857-473 sk-text">精心优选</text>
                    </view>
                    <view class="hotmutil-imagebox indexHotMutil--hotmutil-imagebox">
                        <image mode="scaleToFill" class="sk-image"></image>
                        <image mode="scaleToFill" class="sk-image"></image>
                    </view>
                </view>
                <view class="hotmutil-item indexHotMutil--hotmutil-item">
                    <view class="hotmutil-textbox indexHotMutil--hotmutil-textbox">
                        <text class="sk-transparent sk-text-14-2857-644 sk-text">新鲜好物</text>
                        <text
                            class="hotmutil-alt indexHotMutil--hotmutil-alt sk-transparent sk-text-14-2857-211 sk-text">生活加分项</text>
                    </view>
                    <view class="hotmutil-imagebox indexHotMutil--hotmutil-imagebox">
                        <image mode="scaleToFill" class="sk-image"></image>
                        <image mode="scaleToFill" class="sk-image"></image>
                    </view>
                </view>
            </view>
        </view>
        <view is="components/Content/guessLike/guessLike">
            <view
                class="guesslike-title guessLike--guesslike-title data-v-e3ae3307 guessLike--data-v-e3ae3307 sk-transparent sk-text-14-2857-628 sk-text"
                style="background-position-x: 50%;"> ✨猜你喜欢✨ </view>
            <view is="components/showProduct/showProduct" class="data-v-e3ae3307 guessLike--data-v-e3ae3307">
                <scroll-view scroll-y="true"
                    class="scroll showProduct--scroll data-v-2c8740bb showProduct--data-v-2c8740bb">
                    <view class="showbox showProduct--showbox data-v-2c8740bb showProduct--data-v-2c8740bb">
                        <view class="showbox-item showProduct--showbox-item data-v-2c8740bb showProduct--data-v-2c8740bb">
                        </view>
                        <view class="showbox-item showProduct--showbox-item data-v-2c8740bb showProduct--data-v-2c8740bb">
                        </view>
                    </view>
                </scroll-view>
            </view>
        </view>
    </view>
</template>

<style scoped>
.sk-transparent {
    color: transparent !important;
}

.sk-text-14-2857-469 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 45.9375rpx;
    position: relative !important;
}

.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
}

.sk-text-14-2857-393 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 45.9375rpx;
    position: relative !important;
}

.sk-text-14-2857-488 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 39.3750rpx;
    position: relative !important;
}

.sk-text-14-2857-460 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-813 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-819 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-807 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-381 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-896 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-34 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-949 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-639 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-884 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.0938rpx;
    position: relative !important;
}

.sk-text-14-2857-450 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 45.9375rpx;
    position: relative !important;
}

.sk-text-14-2857-768 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 26.2500rpx;
    position: relative !important;
}

.sk-text-14-2857-975 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 45.9375rpx;
    position: relative !important;
}

.sk-text-14-2857-59 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 26.2500rpx;
    position: relative !important;
}

.sk-text-14-2857-68 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 45.9375rpx;
    position: relative !important;
}

.sk-text-14-2857-473 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 26.2500rpx;
    position: relative !important;
}

.sk-text-14-2857-644 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 45.9375rpx;
    position: relative !important;
}

.sk-text-14-2857-211 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 26.2500rpx;
    position: relative !important;
}

.sk-text-14-2857-628 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 52.5000rpx;
    position: relative !important;
}

.sk-image {
    background: #EFEFEF !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
    background: #EFEFEF !important;
    background-image: none !important;
    color: transparent !important;
    border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
    border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
    border-radius: 50% !important;
}

.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
}</style>