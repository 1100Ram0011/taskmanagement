import { CloseIcon } from "@chakra-ui/icons";
import { Badge, Box, Tooltip } from "@chakra-ui/react";

const UserBadgeItem = ({ user, handleFunction, admin }) => {
  return (
    <Tooltip label="Remove User" hasArrow>
      <Badge
        px={2}
        py={1}
        borderRadius="lg"
        m={1}
        mb={2}
        variant="solid"
        fontSize={12}
        colorScheme="purple"
        cursor="pointer"
        onClick={handleFunction}
        display="flex"
        alignItems="center"
      >
        {user.name}
        {admin === user._id && <span> (Admin)</span>}
        <Box ml={1}>
          <CloseIcon boxSize={2.5} />
        </Box>
      </Badge>
    </Tooltip>
  );
};

export default UserBadgeItem;
