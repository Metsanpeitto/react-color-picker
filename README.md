                            CUSTOM PICKER COMPONENT

      Video Demo:  https://www.youtube.com/watch?v=gZxYLvBtj3w&feature=youtu.be
            Demo:  https://metsanpeitto.github.io/react-color-picker/

       (This repository works as you see in the video when running on my          localhost. When deployed on github-pages it behaves in unexpected way. I have research a little bit and show that many others have same problems. )

The react-color library provides all the elements and features needed to build highly customized color pickups.

Anyway at the time of integrating the elements from the original dependency, the way of styling get constrained to only inline-styling.

To allow more customization, I imported the folders required and refactored them to accept class styling in the most easy way to maintain, using SCSS and creating independent files for each element.

Each one of the elements required to build this final component is stored among these folders:
.src/color-picker/common
.src/color-picker/helpers

Deeper modifications are possible editing those files.

In case of need to add more features, they can be imported from the react-color repository with the following syntasix:

import { Alpha } from 'react-color/lib/components/common'

You can import AlphaPicker BlockPicker ChromePicker CirclePicker CompactPicker GithubPicker HuePicker MaterialPicker PhotoshopPicker SketchPicker SliderPicker SwatchesPicker TwitterPicker

This component is based on the library react-color.
(https://github.com/casesandberg/react-color)
