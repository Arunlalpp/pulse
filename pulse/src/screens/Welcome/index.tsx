import { View } from 'react-native';
import React from 'react';
import CarouselCards, { DataItem, FileType } from '../../components/Carousel';

const Home = () => {
  const SampleData: DataItem[] = [
    {
      uri: 'https://i.postimg.cc/N0nTHYc7/Group-6-1.png',
      type: FileType.image,
    },
    {
      uri: 'https://i.postimg.cc/C1dg9sy4/Saly-1-1.png',
      type: FileType.image,
    },
  ];

  return (
    <View>
      <CarouselCards data={SampleData} />
    </View>
  );
};

export default Home;
