radio.onReceivedNumber(function (receivedNumber) {
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
    if (0 == receivedNumber) {
        basic.showIcon(IconNames.Heart)
        xgo.execution_action(xgo.action_enum.Sit_down)
    } else if (1 == receivedNumber) {
        basic.showIcon(IconNames.Silly)
        xgo.move_xgo(xgo.direction_enum.Forward, 65)
    } else if (2 == receivedNumber) {
        basic.showIcon(IconNames.Heart)
        xgo.rotate_angle_continue(xgo.rotate_direction_enum.turn_left, 60, 3)
    } else if (3 == receivedNumber) {
        basic.showIcon(IconNames.Asleep)
        xgo.rotate_angle_continue(xgo.rotate_direction_enum.turn_right, 45, 2)
    } else if (4 == receivedNumber) {
        basic.showIcon(IconNames.Confused)
        xgo.move_xgo(xgo.direction_enum.Backward, 60)
    } else if (5 == receivedNumber) {
        basic.showIcon(IconNames.Angry)
        xgo.execution_action(xgo.action_enum.Sit_down)
    }
})
xgo.init_xgo_serial(SerialPin.P2, SerialPin.P1)
radio.setGroup(3)
basic.showIcon(IconNames.Happy)
music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
