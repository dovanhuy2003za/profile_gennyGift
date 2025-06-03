/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/extensions */

import React from 'react';

import Button from '../elements/Button';

export default function BrandIcon() {
  return (
    <Button
      className=""
      type="link"
      href="/"
    >
      <p className="text-pink-500 text-4xl font-medium">
        GENNY
        <span className="text-pink-600"> GIFT</span>
      </p>
    </Button>
  );
}
