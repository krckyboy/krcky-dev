import React, { FunctionComponent } from 'react';
import Image from 'next/image';

interface Props {
  url: string;
  imgSrc: string;
  imgAlt: string;
}

const SingleSocialIcon: FunctionComponent<Props> = (props) => {
  return (
    <li>
      <a href={props.url} target={'_blank'}>
        <Image src={props.imgSrc} alt={props.imgAlt} width={40} height={40} />
      </a>
    </li>
  );
};

export default SingleSocialIcon;