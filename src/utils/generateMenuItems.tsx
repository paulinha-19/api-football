import { MenuItem } from "@mui/material";

export const generateMenuItems = (
  responseData: any[],
  keyExtractor: string
) => {
  if (responseData?.length === 0) {
    return [
      <MenuItem key="no-data" value="">
        No data available
      </MenuItem>,
    ];
  }

  return responseData?.map((item, index) => (
    <MenuItem key={index} value={item[keyExtractor]}>
      {item[keyExtractor]}
    </MenuItem>
  ));
};
