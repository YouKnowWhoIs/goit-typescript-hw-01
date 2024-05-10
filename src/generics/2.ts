type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

type top = Pick<AllType, "name" | "color">;
type bottom = Pick<AllType, "position" | "weight">;

function compare<T, U>(top: T, bottom: U): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
