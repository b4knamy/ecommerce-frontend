import { GlassesColorsType } from './information/information.type';

export function GlassesColors({ colorRef, colors = [] }: GlassesColorsType) {
  return (
    <div data-testid="__available_colors">
      <select name="color" ref={colorRef} defaultValue={colors[0].slug}>
        {colors.map((color) => {
          return (
            <option key={color.id} value={color.slug}>
              {color.name}
            </option>
          );
        })}
      </select>
    </div>
  );
}
