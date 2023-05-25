import type { Category, Data, ProductRequest, Status } from "@/types/data.types";
import { SortBy } from "@/types/suggestions.types";
// import { awaiter } from "@/utils";

export const useDataStore = defineStore("data", {
  state: () => ({
    data: null as Data | null,
    error: null as Error | null,
    isLoading: false,
    filterBy: "all" as Category | "all",
    sortBy: "Most Upvotes" as SortBy,
  }),
  getters: {
    currentUser: state => state.data?.currentUser,
    productRequests: state => state.data?.productRequests,
    getFilteredPRs(state) {
      const productRequests = this.productRequests;

      return (): ProductRequest[] | null => {
        let filteredPRs;

        if (state.filterBy === "all") {
          filteredPRs = productRequests;
        } else {
          filteredPRs = productRequests?.filter(
            request => request.category.toLowerCase() === state.filterBy.toLowerCase()
          );
        }

        if (filteredPRs) {
          switch (state.sortBy) {
            case SortBy.MOST_UPVOTES:
              return filteredPRs.sort((a, b) => b.upvotes - a.upvotes);
            case SortBy.LEAST_UPVOTES:
              return filteredPRs.sort((a, b) => a.upvotes - b.upvotes);
            case SortBy.MOST_COMMENTS:
              return filteredPRs.sort((a, b) => (b.comments?.length || 0) - (a.comments?.length || 0));
            case SortBy.LEAST_COMMENTS:
              return filteredPRs.sort((a, b) => (a.comments?.length || 0) - (b.comments?.length || 0));
            default:
              return filteredPRs;
          }
        } else {
          return null;
        }
      };
    },
    stateCount: (state): { [key in Exclude<Status, "suggestion">]: number } => ({
      planned: state.data?.productRequests?.filter(request => request.status === "planned")?.length ?? 0,
      "in-progress": state.data?.productRequests?.filter(request => request.status === "in-progress")?.length ?? 0,
      live: state.data?.productRequests?.filter(request => request.status === "live")?.length ?? 0,
    }),
  },
  actions: {
    async fetchData() {
      this.isLoading = true;

      // await awaiter(3_000);
      await fetch("/data.json")
        .then(res => res.json())
        .then((res: Data) => {
          this.data = res;
        })
        .catch(err => {
          this.error = err;
        });

      this.isLoading = false;
    },
  },
});
