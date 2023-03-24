basic.forever(function () {
    if (input.acceleration(Dimension.X) < -255 && input.acceleration(Dimension.Y) < -255) {
        basic.showArrow(ArrowNames.NorthWest)
    } else if (input.acceleration(Dimension.X) > 255 && input.acceleration(Dimension.Y) < -255) {
        basic.showArrow(ArrowNames.NorthEast)
    } else if (input.acceleration(Dimension.X) < -255 && input.acceleration(Dimension.Y) > 255) {
        basic.showArrow(ArrowNames.SouthWest)
    } else if (input.acceleration(Dimension.X) > 255 && input.acceleration(Dimension.Y) > 255) {
        basic.showArrow(ArrowNames.SouthEast)
    } else if (input.acceleration(Dimension.X) > 255) {
        basic.showArrow(ArrowNames.East)
    } else if (input.acceleration(Dimension.X) < -255) {
        basic.showArrow(ArrowNames.West)
    } else if (input.acceleration(Dimension.Y) > 255) {
        basic.showArrow(ArrowNames.South)
    } else if (input.acceleration(Dimension.Y) < -255) {
        basic.showArrow(ArrowNames.North)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
