import { Stack, Skeleton } from "@chakra-ui/react";

const ChatLoading = () => {
  const skeletonCount = 10; // You can adjust this number based on how many skeletons you want to display

  return (
    <Stack>
      {Array.from({ length: skeletonCount }).map((_, index) => (
        <Skeleton key={index} height="45px" />
      ))}
    </Stack>
  );
};

export default ChatLoading;
