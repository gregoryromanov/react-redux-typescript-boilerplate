import { SystemState } from '../../globalTypes';

export const getDogsList = ({ dogs }: SystemState) => dogs.dogsList;
// dogs.dogsList.filter(({ list }) => list.length);
