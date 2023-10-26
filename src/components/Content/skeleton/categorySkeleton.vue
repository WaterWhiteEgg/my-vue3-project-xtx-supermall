<template name="skeleton">
  <view class="sk-container">
    <view is="components/search/search" class="data-v-4046d630">
      <view
        class="search-bgc search--search-bgc data-v-93c6ab4d search--data-v-93c6ab4d"
      >
        <view
          class="search-container search--search-container data-v-93c6ab4d search--data-v-93c6ab4d"
        >
          <label
            class="search-icon search--search-icon data-v-93c6ab4d search--data-v-93c6ab4d sk-transparent sk-text-14-2857-404 sk-text"
            ></label
          >
          <view
            class="search search--search data-v-93c6ab4d search--data-v-93c6ab4d sk-image"
            placeholder="搜索内容"
            type="text"
          ></view>
        </view>
      </view>
    </view>
    <view class="category data-v-4046d630">
      <view is="pages/category/child/categoryLeft" class="data-v-4046d630">
        <scroll-view
          scroll-y="true"
          class="category-scroll categoryLeft--category-scroll data-v-6c7ce2fb categoryLeft--data-v-6c7ce2fb"
        >
          <view
            class="active categoryLeft--active category-scroll-item categoryLeft--category-scroll-item data-v-6c7ce2fb categoryLeft--data-v-6c7ce2fb sk-transparent sk-text-14-2857-704 sk-text sk-pseudo sk-pseudo-circle"
            style="background-position-x: 50%"
            >居家</view
          >
          <view
            class="category-scroll-item categoryLeft--category-scroll-item data-v-6c7ce2fb categoryLeft--data-v-6c7ce2fb sk-transparent sk-text-14-2857-497 sk-text"
            style="background-position-x: 50%"
            >美食</view
          >
          <view
            class="category-scroll-item categoryLeft--category-scroll-item data-v-6c7ce2fb categoryLeft--data-v-6c7ce2fb sk-transparent sk-text-14-2857-220 sk-text"
            style="background-position-x: 50%"
            >服饰</view
          >
          <view
            class="category-scroll-item categoryLeft--category-scroll-item data-v-6c7ce2fb categoryLeft--data-v-6c7ce2fb sk-transparent sk-text-14-2857-885 sk-text"
            style="background-position-x: 50%"
            >母婴</view
          >
          <view
            class="category-scroll-item categoryLeft--category-scroll-item data-v-6c7ce2fb categoryLeft--data-v-6c7ce2fb sk-transparent sk-text-14-2857-599 sk-text"
            style="background-position-x: 50%"
            >个护</view
          >
          <view
            class="category-scroll-item categoryLeft--category-scroll-item data-v-6c7ce2fb categoryLeft--data-v-6c7ce2fb sk-transparent sk-text-14-2857-619 sk-text"
            style="background-position-x: 50%"
            >严选</view
          >
          <view
            class="category-scroll-item categoryLeft--category-scroll-item data-v-6c7ce2fb categoryLeft--data-v-6c7ce2fb sk-transparent sk-text-14-2857-335 sk-text"
            style="background-position-x: 50%"
            >数码</view
          >
          <view
            class="category-scroll-item categoryLeft--category-scroll-item data-v-6c7ce2fb categoryLeft--data-v-6c7ce2fb sk-transparent sk-text-14-2857-658 sk-text"
            style="background-position-x: 50%"
            >运动</view
          >
          <view
            class="category-scroll-item categoryLeft--category-scroll-item data-v-6c7ce2fb categoryLeft--data-v-6c7ce2fb sk-transparent sk-text-14-2857-4 sk-text"
            style="background-position-x: 50%"
            >杂项</view
          >
        </scroll-view>
      </view>
      <view is="pages/category/child/categoryShow" class="data-v-4046d630">
        <scroll-view
          scroll-y="true"
          class="category-show categoryShow--category-show data-v-25144688 categoryShow--data-v-25144688"
        >
          <view
            class="category-swiper categoryShow--category-swiper data-v-25144688 categoryShow--data-v-25144688"
          >
            <view
              is="components/swiper/swiperMian"
              class="data-v-25144688 categoryShow--data-v-25144688"
            >
              <view>
                <view
                  is="node-modules/@dcloudio/uni-ui/lib/uni-swiper-dot/uni-swiper-dot"
                  class="uni-swiper-dot swiperMian--uni-swiper-dot"
                >
                  <view class="uni-swiper__warp dot--uni-swiper__warp">
                    <swiper
                      circular="true"
                      class="swiper-box swiperMian--swiper-box"
                      current="0"
                      autoplay="false"
                    >
                      <swiper-item
                        style="
                          position: absolute;
                          width: 100%;
                          height: 100%;
                          transform: translate(0%, 0px) translateZ(0px);
                        "
                      >
                        <view class="swiper-item swiperMian--swiper-item">
                          <image mode="scaleToFill" class="sk-image"></image>
                        </view>
                      </swiper-item>
                      <swiper-item
                        style="
                          position: absolute;
                          width: 100%;
                          height: 100%;
                          transform: translate(100%, 0px) translateZ(0px);
                        "
                      >
                        <view class="swiper-item swiperMian--swiper-item">
                          <image mode="scaleToFill" class="sk-image"></image>
                        </view>
                      </swiper-item>
                    </swiper>
                    <view
                      class="uni-swiper__dots-box dot--uni-swiper__dots-box"
                      style="bottom: 10px"
                    >
                      <view
                        class="uni-swiper__dots-item dot--uni-swiper__dots-item"
                        style="
                          width: 20px;
                          height: 6px;
                          background-color: rgba(255, 255, 255, 0.6);
                          border: 0px;
                        "
                      ></view>
                      <view
                        class="uni-swiper__dots-item dot--uni-swiper__dots-item"
                        style="
                          width: 20px;
                          height: 6px;
                          background-color: rgba(255, 255, 255, 0.3);
                          border: 0px;
                        "
                      ></view>
                      <view
                        class="uni-swiper__dots-item dot--uni-swiper__dots-item"
                        style="
                          width: 20px;
                          height: 6px;
                          background-color: rgba(255, 255, 255, 0.3);
                          border: 0px;
                        "
                      ></view>
                      <view
                        class="uni-swiper__dots-item dot--uni-swiper__dots-item"
                        style="
                          width: 20px;
                          height: 6px;
                          background-color: rgba(255, 255, 255, 0.3);
                          border: 0px;
                        "
                      ></view>
                      <view
                        class="uni-swiper__dots-item dot--uni-swiper__dots-item"
                        style="
                          width: 20px;
                          height: 6px;
                          background-color: rgba(255, 255, 255, 0.3);
                          border: 0px;
                        "
                      ></view>
                    </view>
                  </view>
                </view>
              </view>
            </view>
          </view>
          <view class="data-v-25144688 categoryShow--data-v-25144688">
            <view
              class="category-title categoryShow--category-title data-v-25144688 categoryShow--data-v-25144688"
            >
              <text
                class="data-v-25144688 categoryShow--data-v-25144688 sk-transparent sk-text-14-2857-26 sk-text"
                >居家生活用品</text
              >
              <text
                class="category-title-showall categoryShow--category-title-showall data-v-25144688 categoryShow--data-v-25144688 sk-transparent sk-text-14-2857-423 sk-text"
              >
                全部&gt;
              </text>
            </view>
            <view
              is="pages/category/child/categoryShowbox"
              class="data-v-25144688 categoryShow--data-v-25144688"
            >
              <view
                class="category-show-box categoryShowbox--category-show-box data-v-2c715561 categoryShowbox--data-v-2c715561"
              >
                <view
                  class="category-show-item categoryShowbox--category-show-item data-v-2c715561 categoryShowbox--data-v-2c715561"
                >
                  <view
                    class="category-show-pic categoryShowbox--category-show-pic data-v-2c715561 categoryShowbox--data-v-2c715561"
                  >
                    <image
                      class="data-v-2c715561 categoryShowbox--data-v-2c715561 sk-image"
                      mode="scaleToFill"
                    ></image>
                  </view>
                  <view
                    class="category-show-desc categoryShowbox--category-show-desc data-v-2c715561 categoryShowbox--data-v-2c715561"
                  >
                    <text
                      class="category-show-title categoryShowbox--category-show-title data-v-2c715561 categoryShowbox--data-v-2c715561 sk-transparent sk-text-14-2857-552 sk-text"
                      >法国年份雅文邑700毫升</text
                    >
                    <view
                      class="category-show-price categoryShowbox--category-show-price data-v-2c715561 categoryShowbox--data-v-2c715561 sk-transparent sk-text-14-2857-288 sk-text"
                    >
                      ￥1480.00</view
                    >
                  </view>
                </view>
                <view
                  class="category-show-item categoryShowbox--category-show-item data-v-2c715561 categoryShowbox--data-v-2c715561"
                >
                  <view
                    class="category-show-pic categoryShowbox--category-show-pic data-v-2c715561 categoryShowbox--data-v-2c715561"
                  >
                    <image
                      class="data-v-2c715561 categoryShowbox--data-v-2c715561 sk-image"
                      mode="scaleToFill"
                    ></image>
                  </view>
                  <view
                    class="category-show-desc categoryShowbox--category-show-desc data-v-2c715561 categoryShowbox--data-v-2c715561"
                  >
                    <text
                      class="category-show-title categoryShowbox--category-show-title data-v-2c715561 categoryShowbox--data-v-2c715561 sk-transparent sk-text-14-2857-467 sk-text"
                      >梅乃宿梅酒720毫升</text
                    >
                    <view
                      class="category-show-price categoryShowbox--category-show-price data-v-2c715561 categoryShowbox--data-v-2c715561 sk-transparent sk-text-14-2857-701 sk-text"
                    >
                      ￥168.00</view
                    >
                  </view>
                </view>
                <view
                  class="category-show-item categoryShowbox--category-show-item data-v-2c715561 categoryShowbox--data-v-2c715561"
                >
                  <view
                    class="category-show-pic categoryShowbox--category-show-pic data-v-2c715561 categoryShowbox--data-v-2c715561"
                  >
                    <image
                      class="data-v-2c715561 categoryShowbox--data-v-2c715561 sk-image"
                      mode="scaleToFill"
                    ></image>
                  </view>
                  <view
                    class="category-show-desc categoryShowbox--category-show-desc data-v-2c715561 categoryShowbox--data-v-2c715561"
                  >
                    <text
                      class="category-show-title categoryShowbox--category-show-title data-v-2c715561 categoryShowbox--data-v-2c715561 sk-transparent sk-text-14-2857-956 sk-text"
                      >多米尼加陈年朗姆酒700毫升</text
                    >
                    <view
                      class="category-show-price categoryShowbox--category-show-price data-v-2c715561 categoryShowbox--data-v-2c715561 sk-transparent sk-text-14-2857-105 sk-text"
                    >
                      ￥238.00</view
                    >
                  </view>
                </view>
                <view
                  class="category-show-item categoryShowbox--category-show-item data-v-2c715561 categoryShowbox--data-v-2c715561"
                >
                  <view
                    class="category-show-pic categoryShowbox--category-show-pic data-v-2c715561 categoryShowbox--data-v-2c715561"
                  >
                    <image
                      class="data-v-2c715561 categoryShowbox--data-v-2c715561 sk-image"
                      mode="scaleToFill"
                    ></image>
                  </view>
                  <view
                    class="category-show-desc categoryShowbox--category-show-desc data-v-2c715561 categoryShowbox--data-v-2c715561"
                  >
                    <text
                      class="category-show-title categoryShowbox--category-show-title data-v-2c715561 categoryShowbox--data-v-2c715561 sk-transparent sk-text-14-2857-194 sk-text"
                      >全新升级，四川酸辣粉195克*6杯</text
                    >
                    <view
                      class="category-show-price categoryShowbox--category-show-price data-v-2c715561 categoryShowbox--data-v-2c715561 sk-transparent sk-text-14-2857-191 sk-text"
                    >
                      ￥69.00</view
                    >
                  </view>
                </view>
                <view
                  class="category-show-item categoryShowbox--category-show-item data-v-2c715561 categoryShowbox--data-v-2c715561"
                >
                  <view
                    class="category-show-pic categoryShowbox--category-show-pic data-v-2c715561 categoryShowbox--data-v-2c715561"
                  >
                    <image
                      class="data-v-2c715561 categoryShowbox--data-v-2c715561 sk-image"
                      mode="scaleToFill"
                    ></image>
                  </view>
                  <view
                    class="category-show-desc categoryShowbox--category-show-desc data-v-2c715561 categoryShowbox--data-v-2c715561"
                  >
                    <text
                      class="category-show-title categoryShowbox--category-show-title data-v-2c715561 categoryShowbox--data-v-2c715561 sk-transparent sk-text-14-2857-692 sk-text"
                      >川味牛肉辣椒酱190克</text
                    >
                    <view
                      class="category-show-price categoryShowbox--category-show-price data-v-2c715561 categoryShowbox--data-v-2c715561 sk-transparent sk-text-14-2857-224 sk-text"
                    >
                      ￥38.00</view
                    >
                  </view>
                </view>
                <view
                  class="category-show-item categoryShowbox--category-show-item data-v-2c715561 categoryShowbox--data-v-2c715561"
                >
                  <view
                    class="category-show-pic categoryShowbox--category-show-pic data-v-2c715561 categoryShowbox--data-v-2c715561"
                  >
                    <image
                      class="data-v-2c715561 categoryShowbox--data-v-2c715561 sk-image"
                      mode="scaleToFill"
                    ></image>
                  </view>
                  <view
                    class="category-show-desc categoryShowbox--category-show-desc data-v-2c715561 categoryShowbox--data-v-2c715561"
                  >
                    <text
                      class="category-show-title categoryShowbox--category-show-title data-v-2c715561 categoryShowbox--data-v-2c715561 sk-transparent sk-text-14-2857-178 sk-text"
                      >钻石陶瓷涂层多用锅18cm 小奶锅</text
                    >
                    <view
                      class="category-show-price categoryShowbox--category-show-price data-v-2c715561 categoryShowbox--data-v-2c715561 sk-transparent sk-text-14-2857-34 sk-text"
                    >
                      ￥149.00</view
                    >
                  </view>
                </view>
                <view
                  class="category-show-item categoryShowbox--category-show-item data-v-2c715561 categoryShowbox--data-v-2c715561"
                >
                  <view
                    class="category-show-pic categoryShowbox--category-show-pic data-v-2c715561 categoryShowbox--data-v-2c715561"
                  >
                    <image
                      class="data-v-2c715561 categoryShowbox--data-v-2c715561 sk-image"
                      mode="scaleToFill"
                    ></image>
                  </view>
                </view>
                <view
                  class="category-show-item categoryShowbox--category-show-item data-v-2c715561 categoryShowbox--data-v-2c715561"
                >
                  <view
                    class="category-show-pic categoryShowbox--category-show-pic data-v-2c715561 categoryShowbox--data-v-2c715561"
                  >
                    <image
                      class="data-v-2c715561 categoryShowbox--data-v-2c715561 sk-image"
                      mode="scaleToFill"
                    ></image>
                  </view>
                </view>
                <view
                  class="category-show-item categoryShowbox--category-show-item data-v-2c715561 categoryShowbox--data-v-2c715561"
                >
                  <view
                    class="category-show-pic categoryShowbox--category-show-pic data-v-2c715561 categoryShowbox--data-v-2c715561"
                  >
                    <image
                      class="data-v-2c715561 categoryShowbox--data-v-2c715561 sk-image"
                      mode="scaleToFill"
                    ></image>
                  </view>
                </view>
              </view>
            </view>
          </view>
          <view class="data-v-25144688 categoryShow--data-v-25144688">
            <view
              class="category-title categoryShow--category-title data-v-25144688 categoryShow--data-v-25144688"
            >
              <text
                class="data-v-25144688 categoryShow--data-v-25144688 sk-transparent sk-text-14-2857-32 sk-text"
                >收纳</text
              >
              <text
                class="category-title-showall categoryShow--category-title-showall data-v-25144688 categoryShow--data-v-25144688 sk-transparent sk-text-14-2857-736 sk-text"
              >
                全部&gt;
              </text>
            </view>
            <view
              is="pages/category/child/categoryShowbox"
              class="data-v-25144688 categoryShow--data-v-25144688"
            >
              <view
                class="category-show-box categoryShowbox--category-show-box data-v-2c715561 categoryShowbox--data-v-2c715561"
              >
                <view
                  class="category-show-item categoryShowbox--category-show-item data-v-2c715561 categoryShowbox--data-v-2c715561"
                >
                  <view
                    class="category-show-pic categoryShowbox--category-show-pic data-v-2c715561 categoryShowbox--data-v-2c715561"
                  >
                    <image
                      class="data-v-2c715561 categoryShowbox--data-v-2c715561 sk-image"
                      mode="scaleToFill"
                    ></image>
                  </view>
                </view>
                <view
                  class="category-show-item categoryShowbox--category-show-item data-v-2c715561 categoryShowbox--data-v-2c715561"
                >
                  <view
                    class="category-show-pic categoryShowbox--category-show-pic data-v-2c715561 categoryShowbox--data-v-2c715561"
                  >
                    <image
                      class="data-v-2c715561 categoryShowbox--data-v-2c715561 sk-image"
                      mode="scaleToFill"
                    ></image>
                  </view>
                </view>
                <view
                  class="category-show-item categoryShowbox--category-show-item data-v-2c715561 categoryShowbox--data-v-2c715561"
                >
                  <view
                    class="category-show-pic categoryShowbox--category-show-pic data-v-2c715561 categoryShowbox--data-v-2c715561"
                  >
                    <image
                      class="data-v-2c715561 categoryShowbox--data-v-2c715561 sk-image"
                      mode="scaleToFill"
                    ></image>
                  </view>
                </view>
              </view>
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
.sk-text-14-2857-404 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}
.sk-text-14-2857-704 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.375rpx;
  position: relative !important;
}
.sk-text-14-2857-497 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.375rpx;
  position: relative !important;
}
.sk-text-14-2857-220 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.375rpx;
  position: relative !important;
}
.sk-text-14-2857-885 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.375rpx;
  position: relative !important;
}
.sk-text-14-2857-599 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.375rpx;
  position: relative !important;
}
.sk-text-14-2857-619 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.375rpx;
  position: relative !important;
}
.sk-text-14-2857-335 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.375rpx;
  position: relative !important;
}
.sk-text-14-2857-658 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.375rpx;
  position: relative !important;
}
.sk-text-14-2857-4 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.375rpx;
  position: relative !important;
}
.sk-text-14-2857-26 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 42.6563rpx;
  position: relative !important;
}
.sk-text-14-2857-423 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-text-14-2857-552 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.375rpx;
  position: relative !important;
}
.sk-text-14-2857-288 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-text-14-2857-467 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.375rpx;
  position: relative !important;
}
.sk-text-14-2857-701 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-text-14-2857-956 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.375rpx;
  position: relative !important;
}
.sk-text-14-2857-105 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-text-14-2857-194 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.375rpx;
  position: relative !important;
}
.sk-text-14-2857-191 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-text-14-2857-692 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.375rpx;
  position: relative !important;
}
.sk-text-14-2857-224 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-text-14-2857-178 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.375rpx;
  position: relative !important;
}
.sk-text-14-2857-34 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-text-14-2857-32 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 42.6563rpx;
  position: relative !important;
}
.sk-text-14-2857-736 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.8125rpx;
  position: relative !important;
}
.sk-image {
  background: #efefef !important;
}
.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
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
}
</style>