class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}

const merge = (list1: ListNode | null, list2: ListNode | null): ListNode | null => {
	const baru = new ListNode()
	let baris = baru

	while (list1 !== null && list2 !== null) {
		if (list1.val < list2.val) {
			baris.next = list1;
			list1 = list1.next
		} else {
			baris.next = list2;
			list2 = list2.next;
		}
		baris = baris.next

	}

	baris.next = list1 !== null ? list1 : list2;

	return baru.next
}
