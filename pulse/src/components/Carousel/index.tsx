import React, { useState, useRef } from 'react';
import { Dimensions, Image, View, TouchableOpacity, Text } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { dotStyle, inActiveDotStyle, styles } from './styles';
import { Buttons } from '../Button';
import { Common } from '../../assets/svg';
import { COLORS } from '../../theme/theme';

export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

export enum FileType {
  image = 'image/jpeg',
  imageJpg = 'image/jpg',
  video = 'video/mp4',
}

export interface DataItem {
  uri: string;
  type: FileType;
}

export const CarouselCardItem = ({
  item,
  index,
}: {
  item: DataItem;
  index: number;
}) => {
  return (
    <View key={index} style={{}}>
      {item?.type === FileType.image && (
        <Image
          source={{ uri: item?.uri }}
          style={styles.image}
          resizeMode="cover"
        />
      )}
    </View>
  );
};

interface CarouselCardsProps {
  data: DataItem[];
  widthOffset?: number;
}

const CarouselCards: React.FC<CarouselCardsProps> = ({
  data,
  widthOffset = 48,
}) => {
  const [index, setIndex] = useState(0);
  const [nextButtonPressed, setNextButtonPressed] = useState(false);
  const carouselRef = useRef<Carousel<DataItem>>(null);

  const goToNextSlide = () => {
    if (carouselRef.current && index < data.length - 1) {
      const nextIndex = index + 1;
      carouselRef.current.snapToItem(nextIndex);
      setIndex(nextIndex);
      setNextButtonPressed(true);
    }
  };

  const goToPrevSlide = () => {
    if (carouselRef.current && index > 0) {
      const prevIndex = index - 1;
      carouselRef.current.snapToItem(prevIndex);
      setIndex(prevIndex);
      setNextButtonPressed(false);
    }
  };

  return (
    <>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={carouselRef}
        data={data}
        renderItem={CarouselCardItem}
        sliderWidth={SLIDER_WIDTH - widthOffset}
        itemWidth={ITEM_WIDTH - widthOffset}
        inactiveSlideShift={0}
        useScrollView={true}
        vertical={false}
        autoplay={false}
        loop={false}
        autoplayDelay={1000}
        autoplayInterval={3000}
        onSnapToItem={index => setIndex(index)}
      />

      <Pagination
        dotsLength={data.length}
        activeDotIndex={index}
        carouselRef={carouselRef}
        dotStyle={dotStyle}
        inactiveDotOpacity={1}
        inactiveDotScale={1}
        inactiveDotStyle={inActiveDotStyle}
        tappableDots={true}
        containerStyle={{ paddingBottom: 0, paddingTop: 20 }}
      />
      <View style={styles.carousalWrapper}>
        <Text style={styles.carousalHeader}>
          {nextButtonPressed
            ? 'Unlock your true potential'
            : 'Seeking for personal growth'}
        </Text>
        <Text style={styles.carousalDescription}>
          {nextButtonPressed
            ? 'Track progress, unlock rewards, your personal development, simplified.'
            : 'Elevate your potential with our personalized self-improvement app.'}
        </Text>
      </View>
      <View style={styles.carousalSliderWrapper}>
        <TouchableOpacity onPress={goToPrevSlide}>
          <Text style={styles.sliderText}>
            {nextButtonPressed ? 'Back' : 'Skip'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={goToNextSlide}>
          {nextButtonPressed ? (
            <Text
              style={styles.}>
              Get Started
            </Text>
          ) : (
            <Text
              style={{
                borderRadius: 999,
                backgroundColor: '#8A6AE4',
                padding: 8,
              }}>
              <Common.ChevronRight />
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
};

export default CarouselCards;
