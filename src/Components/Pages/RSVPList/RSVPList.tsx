import { Text } from "../../Shared/Text/Text";
import { useFetchFunction } from "../../../utils/fetch";
import { RSVPType } from "../RSVPAndWishes/RSVPAndWishes";
import LoadingSpinner from "../../Shared/LoadingSpinner/LoadingSpinner";
import { useEffect } from "react";
import { confirmationOptions } from "../RSVPAndWishes/RSVPAndWishes";
import styles from "./RSVPList.module.css";

const SingleRSVP = ({
  name,
  relation,
  isComing,
}: {
  name: string;
  relation: string;
  isComing: string;
}) => {
  return (
    <div className={styles.singleItem}>
      <Text block={false} fontSize={14} fontWeight="400" color="primary">
        {name} ({relation})
      </Text>
      <div>
        <Text block={false} fontSize={16} fontWeight="500">
          {confirmationOptions.filter((o) => o.value === isComing)?.[0]?.label}
        </Text>
      </div>
    </div>
  );
};

const RSVPList = () => {
  const {
    data: rsvpData,
    loading: rsvpLoading,
    fetchFunction: rsvpFetchFunction,
  } = useFetchFunction<RSVPType[]>();

  const fetchRsvp = () => {
    rsvpFetchFunction(() => fetch("https://ourjoy-einvite.vercel.app/rsvp"));
  };

  useEffect(() => {
    fetchRsvp();
  }, []);

  if (rsvpLoading) {
    return (
      <div className={styles.loading}>
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div>
        <Text block={false} fontSize={20} fontWeight="600">
          Daftar Hadir
        </Text>
      </div>
      <div className="margin--large-t">
        {rsvpData?.map((rsvp) => (
          <SingleRSVP
            key={rsvp.name}
            name={rsvp.name}
            relation={rsvp.relation}
            isComing={rsvp.confirmation}
          />
        ))}
      </div>
    </div>
  );
};

export default RSVPList;
