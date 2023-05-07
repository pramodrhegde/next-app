'use client';
import styles from './pagetree.module.css';
import {useState} from 'react';

function CollapseNode({id, name, children}) {
    const [toggledId, setToggledId] = useState(false);

    const handleToggle = function(e) {
        setToggledId(!toggledId);
        // e.stopPropagation();
    };

    return <li key={id}
    className={toggledId? `${styles.parentItem} ${styles.collapsed}` : styles.parentItem }>
        <span onClick={handleToggle}>{name}</span>
        {children}
    </li>
}

function contructPageTreeUI(pageTreeNode, handleItemClick) {

    if(pageTreeNode.children && pageTreeNode.children.length) {
        return <CollapseNode name={pageTreeNode.name} id={pageTreeNode.id} handleItemClick={handleItemClick}>
            <ul>
                { pageTreeNode.children.map(element => {
                    return contructPageTreeUI(element, handleItemClick)
                })}
            </ul>
        </CollapseNode>
    };

    console.log('yo');
    return <li key={pageTreeNode.id} onClick={handleItemClick}>{pageTreeNode.name}</li>
}

export default function PageTree({pageTreeData, handleItemClick}) {

    if(!pageTreeData || !pageTreeData.length) return null;

    return <div className={styles.pageTreeContainer}>
        <ul>{
            pageTreeData.map(element => {
                return contructPageTreeUI(element, handleItemClick)
            })
        }</ul>
    </div>
}